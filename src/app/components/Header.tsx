import Link from "next/link";
import { IoLogoGameControllerB } from "react-icons/io";

import { SearchBar } from "./SearchBar";
import { SignIn } from "./SignIn";
import { Cart } from "./Cart";
import { Navbar } from "./Navbar";

export function Header() {
    return (
        <header className="fixed w-full  flex flex-col items-center justify-center top-0">
            <div className="min-h-max w-full h-[60px] max-w-[1200px] transparent flex items-center justify-between px-4">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-white font-bold"
                >
                    <IoLogoGameControllerB size={32} color="white" />
                    <span>E-Games</span>
                </Link>

                <div className="flex items-center justify-between gap-4">
                    <SearchBar />
                    <SignIn />
                    <Cart />
                </div>
            </div>
            <Navbar />
        </header>
    );
}
