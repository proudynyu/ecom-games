import React, { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            className="relative hover:bg-slate-400 px-2 py-2 rounded"
            {...props}
        >
            {children}
        </button>
    );
}
