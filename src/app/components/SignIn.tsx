import React from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'

export function SignIn() {
  return (
    <button className='hover:bg-slate-400 px-2 py-2 rounded'>
      <AiOutlineUserAdd size={24} color="white" />
    </button>
  )
}
