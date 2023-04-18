import Link from 'next/link';
import { IoLogoGameControllerB } from 'react-icons/io'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'

export function Header() {
  return (
    <header className="fixed w-full h-[60px] flex flex-col items-center justify-center top-0">
      <div className="h-full w-full transparent flex items-center justify-between px-4">
        <Link href="/">
          <IoLogoGameControllerB size={32} color='white'/>
        </Link>

        <div className='w-2/4'>
          <label htmlFor='searchBar' className='relative'>
            <input type='text' className="bg-white w-full rounded pl-6 py-1 outline-none" name="searchBar" placeholder='Search'/>
            <span className='pointer absolute left-1 bottom-2/4 translate-y-2/4'><AiOutlineSearch size={16} /></span>
          </label>
        </div>

        <button>
          <AiOutlineShoppingCart size={24} color="white" />
        </button>
      </div>
    </header>
  );
}
