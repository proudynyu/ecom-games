/* eslint-disable */
import React from "react";
import Image from "next/image";

interface ShelfItem {
    productId: string;
    imageUrl: string;
    name: string;
    description: string;
    price: string;
}

interface ShelfProps {
    title: string;
    items: ShelfItem[];
}

export function Shelf({ title, items }: ShelfProps) {
    return (
        <div className="flex flex-col items-center justify-start gap-4">
            <h2>{title}</h2>

            <div className="flex overflow-hidden items-center justify-center">
                {items.map((item) => (
                    <div key={item.productId} className="bg-slate-400">
                        <div className="p-2">
                            <Image src={item.imageUrl} alt={item.name}/>
                        </div>
                        <div>
                            <p>{item.description}</p>
                            <span>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
