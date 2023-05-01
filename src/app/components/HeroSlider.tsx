import React from "react";

export function HeroSlider() {
    return (
        <div className="relative bg-slate-500 md:h-[600px] sm:h-[300px] w-full rounded-[16px]">
            <button className="flex items-center justify-center outline-0 border-0 absolute right-[-14x] top-1/2 -translate-y-1/2 bg-slate-300 w-8 h-8 rounded-full">
                {">"}
            </button>
            <button className="flex items-center justify-center outline-0 border-0 absolute left-[-14px] top-1/2 -translate-y-1/2 bg-slate-300 w-8 h-8 rounded-full">
                {"<"}
            </button>
        </div>
    );
}
