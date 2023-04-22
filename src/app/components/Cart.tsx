import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export function Cart() {
  return (
          <button className='relative hover:bg-slate-400 px-2 py-2 rounded'>
            <AiOutlineShoppingCart size={24} color="white" />
              <span className='text-black text-[8px] absolute right-1 top-[5px] w-3 h-3 rounded-full bg-orange-600' >
                1
              </span>
          </button>
      )
}
