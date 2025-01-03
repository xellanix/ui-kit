import { Button } from "~/Button/Button";
import { NavLink } from "react-router";

export function NavGroup({ name, children }: { name: string; children: React.ReactNode }) {
    return (
        <li className="flex flex-col gap-1">
            {name}
            <ul className="font-normal border-l-2 border-gray-400/20">{children}</ul>
        </li>
    );
}

export function NavItem({ href, children }: { href: string; children?: React.ReactNode }) {
    return (
        <li className={"flex flex-col"}>
            <NavLink to={href} className="size-full flex flex-col">
                {({ isActive }) => (
                    <Button
                        className={{base:"text-left"}}
                        tabIndex={-1}
                        styleType={isActive ? "primary" : "secondary"}>
                        {children}
                    </Button>
                )}
            </NavLink>
        </li>
    );
}
