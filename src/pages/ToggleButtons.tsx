import { CodeBlock } from "~/CodeBlock/CodeBlock";
import { Button } from "~/Button/Button";
import { useCallback, useState } from "react";

interface ButtonCustom {
    styleType: "primary" | "secondary" | "accent";
    style: {
        [key: `--${string}`]: string;
    };
}

export function ToggleButtonsPage() {
    const [settings, setSettings] = useState<ButtonCustom>({
        styleType: "primary",
        style: {},
    });
    const generateCode = useCallback(() => {
        const style = JSON.stringify(settings.style, null, "\t").split("\n").join("\n\t\t");

        return `<Button styleType="${settings.styleType}"${
            style === "{}" ? "" : `\n\t\tstyle={${style}}`
        }>
    Click Me
</Button>`;
    }, [settings]);

    const updateRoot = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSettings((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    const updateColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.currentTarget;
        value = value.startsWith("#") ? value.slice(1) : value;

        setSettings((prev) => {
            let currentStyle = { ...prev.style };

            if (!value) delete currentStyle[`--${name}`];
            else currentStyle[`--${name}`] = "#" + value;

            return { ...prev, style: currentStyle };
        });
    }, []);

    const updateStyle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.currentTarget;

        setSettings((prev) => {
            let currentStyle = { ...prev.style };

            if (!value) delete currentStyle[`--${name}`];
            else currentStyle[`--${name}`] = value;

            return { ...prev, style: currentStyle };
        });
    }, []);

    return (
        <div className="grid grid-cols-[1fr,minmax(12rem,auto)] flex-1 gap-4 overflow-hidden">
            <div className="flex flex-col flex-1 gap-4 min-w-0 min-h-0">
                <div className="flex flex-col h-48 justify-center items-center card-ring">
                    <Button styleType={settings.styleType} style={settings.style}>
                        Click Me
                    </Button>
                </div>
                <div className="flex flex-col flex-1 overflow-auto">
                    <CodeBlock
                        formatAs="tsx"
                        title="Output code (React Typescript)"
                        data-mode="dark">
                        {generateCode()}
                    </CodeBlock>
                </div>
            </div>
            <div className="flex flex-col card-ring p-4 overflow-auto">
                <div className="flex flex-col gap-4">
                    <label className="text-sm font-bold flex flex-col gap-2 *:font-normal *:text-base">
                        Type
                        <select
                            name="styleType"
                            defaultValue={settings.styleType}
                            onChange={updateRoot}>
                            <option value="primary">Primary</option>
                            <option value="secondary">Secondary</option>
                            <option value="accent">Accent</option>
                        </select>
                    </label>
                    <label className="text-sm font-bold flex flex-col gap-2 *:font-normal *:text-base">
                        Button Background Color
                        <div className="flex gap-4 *:min-w-24">
                            <input
                                type="text"
                                name="button-bg"
                                placeholder="#e5e7eb"
                                onChange={updateColor}
                            />
                            <input
                                type="text"
                                name="button-bg-dark"
                                placeholder="#4b5563"
                                onChange={updateColor}
                            />
                        </div>
                    </label>
                    <label className="text-sm font-bold flex flex-col gap-2 *:font-normal *:text-base">
                        Button Text Color
                        <div className="flex gap-4 *:min-w-24">
                            <input
                                type="text"
                                name="button-text"
                                placeholder="#374151"
                                onChange={updateColor}
                            />
                            <input
                                type="text"
                                name="button-text-dark"
                                placeholder="#e5e7eb"
                                onChange={updateColor}
                            />
                        </div>
                    </label>
                    <label className="text-sm font-bold flex flex-col gap-2 *:font-normal *:text-base">
                        Button Padding
                        <input
                            type="text"
                            name="button-p"
                            placeholder="0.5rem 1rem"
                            onChange={updateStyle}
                        />
                    </label>
                    <label className="text-sm font-bold flex flex-col gap-2 *:font-normal *:text-base">
                        Button Font Size
                        <input
                            type="text"
                            name="button-text-size"
                            placeholder="1rem"
                            onChange={updateStyle}
                        />
                    </label>
                    <label className="text-sm font-bold flex flex-col gap-2 *:font-normal *:text-base">
                        Button Line Height
                        <input
                            type="text"
                            name="button-text-line-height"
                            placeholder="1.5rem"
                            onChange={updateStyle}
                        />
                    </label>
                    <label className="text-sm font-bold flex flex-col gap-2 *:font-normal *:text-base">
                        Button Content Alignment
                        <div className="flex gap-4 *:min-w-24">
                            <select name="button-text-x" defaultValue={"center"}>
                                <option value="left">Left</option>
                                <option value="center">Center</option>
                                <option value="right">Right</option>
                            </select>
                            <select name="button-text-y" defaultValue={"middle"}>
                                <option value="top">Top</option>
                                <option value="middle">Middle</option>
                                <option value="bottom">Bottom</option>
                            </select>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}
