import { memo, useCallback, useEffect, useId, useState } from "react";
import colorizeWorker from "./ColorizeWorkers?worker";
import * as Comlink from "comlink";

import "./CodeBlock.css";
import { ColorizeTag } from "./utils/util";
import { Button } from "@/components/Button/Button";

type CodeFormat = "plain-text" | "tsx" | "jsx" | "html" | "ts" | "js";

const CopyButton = memo(function CopyButton({ code }: { code: string }) {
    const [text, setText] = useState("Copy");
    const clickHandler = useCallback(() => {
        navigator.clipboard
            .writeText(code)
            .then(() => setText("Copied"))
            .catch(() => setText("Failed"))
            .finally(() => setTimeout(() => setText("Copy"), 1000));
    }, [code]);

    return (
        <Button
            styleType="secondary"
            className={{ content: "py-2 px-3 text-sm font-semibold" }}
            onClick={clickHandler}>
            {text}
        </Button>
    );
});

export const CodeBlock = memo(function CodeBlock({
    formatAs = "plain-text",
    title = "tsx",
    children = "",
    className = "",
    id,
    ...props
}: {
    formatAs?: CodeFormat;
    title?: string;
    children?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
    const _thisId = useId();

    return (
        <div
            id={id ?? `xcb-${_thisId}`}
            className={`xellanix-code-block flex flex-col gap-0 rounded-xl h-full overflow-hidden card-ring ${className}`}
            {...props}>
            <div>
                <label htmlFor={id ?? `xcb-${_thisId}`}>{title}</label>
                <CopyButton code={children} />
            </div>
            <pre className="h-full">
                <div>
                    <code>
                        <ColoredCodeBlock type={formatAs} code={children} />
                    </code>
                </div>
            </pre>
        </div>
    );
});

type WorkersType = {
    colorize_tsx: (code: string) => Promise<ColorizeTag[]>;
    colorize_html: (code: string) => Promise<ColorizeTag[]>;
};

const switchType = async (
    type: CodeFormat = "plain-text",
    code: string = "",
    signal?: AbortSignal
) => {
    return new Promise<string | React.ReactNode[]>(async (resolve, reject) => {
        if (type === "plain-text") return resolve(code);
        else {
            let norm = type;
            if (norm === "ts" || norm === "js" || norm === "jsx") norm = "tsx";

            const worker = new colorizeWorker();
            const workerAPI = Comlink.wrap<WorkersType>(worker);

            const handleAbort = () => {
                worker.terminate();
                reject(new Error("OperationAborted"));
            };

            if (signal) signal.addEventListener("abort", handleAbort);

            try {
                const tags = await workerAPI[("colorize_" + norm) as keyof WorkersType](code);

                const elements: React.ReactNode[] = [];
                for (let index = 0; index < tags.length; index++) {
                    if (signal?.aborted) break;

                    const element = tags[index];
                    elements.push(
                        <span key={index} className={element.type}>
                            {element.chars}
                        </span>
                    );
                }

                resolve(elements);
            } catch (error) {
                reject(error);
            } finally {
                if (signal) signal.removeEventListener("abort", handleAbort);
                worker.terminate();
            }
        }
    });
};

const ColoredCodeBlock = memo(function ColoredCodeBlock({
    code = "",
    type = "plain-text",
}: {
    code?: string;
    type?: CodeFormat;
}) {
    const [nodes, setNodes] = useState<React.ReactNode[] | string>(code);

    useEffect(() => {
        setNodes(code);

        // Create a new AbortController for each effect run
        const controller = new AbortController();

        // Call the switchType function with the AbortSignal
        switchType(type, code, controller.signal)
            .then((result) => {
                if (!controller.signal.aborted) {
                    setNodes(result);
                }
            })
            .catch((error) => {
                if (error.message !== "OperationAborted") {
                    console.error("Error during switchType:", error);
                }
            });

        // Cleanup function to abort the operation if the component unmounts or dependencies change
        return () => {
            controller.abort();
        };
    }, [code, type]);
    return <>{nodes}</>;
});
