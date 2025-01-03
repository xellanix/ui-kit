import { cn, pp } from "&/utils.ts";
import { NavGroup, NavItem } from "~/Navigation";
import { Outlet } from "react-router";

function App() {
    return (
        <div className="flex flex-col h-full bg-inherit text-inherit">
            <header
                className={cn(
                    "flex flex-row flex-none",
                    "w-full z-50",
                    "lg:border-b",
                    "lg:border-gray-600/10 lg:dark:border-gray-100/10",
                    "transition-colors duration-300 ease-out",
                    "bg-inherit"
                )}>
                <div className="max-w-8xl mx-auto w-full">
                    <div
                        className={cn(
                            "flex items-center",
                            "border-gray-900/10",
                            "border-b lg:border-0",
                            "py-4",
                            "px-4 sm:px-6 md:px-8"
                        )}>
                        <a href="/" className="flex items-center flex-grow-0 gap-2 select-none">
                            <img src={pp("icon-sq.svg")} className="w-8 h-8" alt="Xellanix logo" title="Xellanix" />
                            <span className="text-3xl font-extrabold">UI Kit</span>
                        </a>

                        <div className="flex-grow" />

                        <a
                            href="https://github.com/xellanix/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={pp("github-mark.svg")} className="w-5 h-5" alt="GitHub logo" title="GitHub" />
                        </a>
                    </div>
                </div>
            </header>
            <main
                className={cn(
                    "flex flex-row",
                    "h-full overflow-y-hidden",
                    "ml-8xl/2",
                    "pt-4 lg:pt-6",
                    "pl-4 sm:pl-6 md:pl-8",
                    "bg-inherit"
                )}>
                <section
                    className={cn(
                        "flex flex-col",
                        "w-72 h-[calc(100%-theme(margin.4))] lg:h-[calc(100%-theme(margin.6))]",
                        "mb-4 lg:mb-6",
                        "pr-4",
                        "overflow-y-auto",
                        "bg-inherit"
                    )}>
                    <nav>
                        <ul className="font-bold flex flex-col gap-4">
                            <NavGroup name="Buttons">
                                <NavItem href="/">Button</NavItem>
                                <NavItem href="/toggle-buttons">Toggle Button</NavItem>
                                <NavItem href="/check-boxs">Check Box</NavItem>
                            </NavGroup>
                        </ul>
                    </nav>
                </section>
                <section
                    className={cn(
                        "flex flex-col flex-1",
                        "ml-8",
                        "overflow-y-auto",
                        "pr-[calc(theme(margin.8xl/2)+theme(padding.4)+theme(margin.8))]",
                        "sm:pr-[calc(theme(margin.8xl/2)+theme(padding.6)+theme(margin.8))]",
                        "md:pr-[calc(theme(margin.8xl/2)+theme(padding.8)+theme(margin.8))]",
                        "bg-inherit"
                    )}>
                    <Outlet />
                </section>
            </main>
        </div>
    );
}

export default App;
