import React from 'react'
import Link from "next/link";
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io";

export function Footer() {
    return (
        <footer className="w-full  flex flex-col items-center justify-center border-white border-t">
            <div className="min-h-max w-full h-[60px] max-w-[1200px] transparent flex items-center justify-between px-4">
                <h3>Hi from Footer</h3>
            </div>
            <div className="flex items-center justify-between w-full px-4 py-6 max-w-[1200px] border-t-[1px] border-slate-300">
                <div className='text-white'>
                    <span>Made by <i>Igor</i></span>
                </div>

                <div className="flex gap-2">
                        <Link href="/" title="instagram">
                            <IoLogoInstagram color='white' size={24}/>
                        </Link>
                        <Link href="/" title="whatsapp">
                            <IoLogoWhatsapp color='white' size={24}/>
                        </Link>
                </div>
            </div>
        </footer>
    );
}
