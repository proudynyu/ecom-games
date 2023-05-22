import React from 'react'

interface Item {
    name: string
    description: string
}

interface RulerProps {
    items: Item[]
    title: string
}
export function Ruler({ title, items }: RulerProps) {
    return (
        <div className='flex flex-col gap-2 w-full'>
            <h2 className='text-white text-center'>{title}</h2>
            <ul className='flex gap-2 overflow-x-auto items-center justify-between'>
                {
                    items.map(item => (
                        <li key={item.name} className='min-w-[200px] flex flex-1 flex-col gap-2 items-start justify-between px-2 py-4 bg-slate-400 rounded text-white'>
                            <h3>{item.name}</h3>
                            <span>{item.description}</span>
                        </li>
                    ))
                } 
            </ul>
        </div>
    )
}
