import React from "react";
import Link from "next/link";

type CategoryMenuHeaderLinks = {
    name: string;
    href: string;
};

const CATEGORIES: Readonly<CategoryMenuHeaderLinks[]> = [
    { name: "fighting", href: "#" },
    { name: "horror", href: "#" },
    { name: "puzzle", href: "#" },
    { name: "action", href: "#" },
    { name: "rpg", href: "#" },
    { name: "strategy", href: "#" }
];

export function Navbar() {
    return (
        <nav className="min-h-max w-full max-w-[1200px] px-4 py-2">
            <ul className="h-[60px] flex items-center justify-between text-white gap-2">
                {CATEGORIES.map(category => (
                    <li
                        key={category.name}
                        className="group list-none h-full relative"
                    >
                        <Link
                            className="h-full flex items-center justify-center min-w-[100px] capitalize hover:bg-slate-400 transition-all ease-in-out rounded"
                            href={category.href}
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
