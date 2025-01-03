import { Button } from "~/Button/Button";

export function ButtonsPage() {
    return (
        <div className="flex flex-row gap-4">
            <div className="flex flex-col self-start">
                <Button styleType="primary">Click Me</Button>
            </div>
            <div className="flex flex-col self-start">
                <Button styleType="secondary">Click Me</Button>
            </div>
            <div className="flex flex-col self-start">
                <Button styleType="accent">Click Me</Button>
            </div>
        </div>
    );
}
