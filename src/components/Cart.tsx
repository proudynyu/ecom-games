import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Button } from "./Button";

export function Cart() {
    return (
        <Button>
            <AiOutlineShoppingCart size={24} color="white" />
            <span className="text-black text-[8px] absolute right-1 top-[5px] w-3 h-3 rounded-full bg-orange-600">
                1
            </span>
        </Button>
    );
}
