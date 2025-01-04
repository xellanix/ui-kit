interface DisplayBoxProps {
    title: string;
    children: React.ReactNode;
}

export function DisplayBox({ title, children }: DisplayBoxProps) {
    return (
        <div className="flex flex-col px-12 py-4 pb-16 gap-4 items-center justify-center border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-xl">
            <h6 className="text-lg font-bold h-8 inline-flex items-center text-xellanix-600 dark:text-xellanix-300">{title}</h6>
            {children}
        </div>
    );
}
