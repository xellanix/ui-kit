import { DisplayBox } from "~/DisplayBox";

import { Button } from "~/Button/Button";

export function ButtonsPage() {
    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] w-full mt-4 gap-4">
            <DisplayBox title="Primary">
                    <Button styleType="primary">Click Me</Button>
                </DisplayBox>
                <DisplayBox title="Secondary">
                    <Button styleType="secondary">Click Me</Button>
                </DisplayBox>
                <DisplayBox title="Accent">
                    <Button styleType="accent">Click Me</Button>
                </DisplayBox>
            </div>
        </>
    );
}
