import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export function SearchBar() {
  return (
   <div className='w-2/4'>
    <label htmlFor='searchBar' className='relative'>
    <input type='text' className="bg-transparent text-white w-full rounded pl-6 py-1 outline-none border-b-[1px] border-slate-400" name="searchBar" placeholder='Search'/>
    <span className='pointer absolute left-1 bottom-2/4 translate-y-2/4'><AiOutlineSearch size={16} color="white" /></span>
    </label>
   </div>
  )
}
