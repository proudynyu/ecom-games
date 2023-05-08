"use client";

import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Button } from "./Button";

export function SearchBar() {
    const [showSearch, setShowSearch] = useState<boolean>(false);

    function handleShowSearch() {
        setShowSearch(!showSearch);
    }

    return (
        <div>
            <Button onClick={handleShowSearch}>
                <AiOutlineSearch size={24} color="white" />
            </Button>
            {showSearch ? (
                <div className="z-10 absolute left-0 top-0 w-screen h-screen flex items-center justify-center">
                    <div
                        className="opacity-5 w-full h-full bg-white absolute"
                        onClick={handleShowSearch}
                    />
                    <div className="z-10 flex flex-col items-center justify-start px-2 py-2 w-[500px] rounded bg-slate-950">
                        <label htmlFor="searchBar" className="relative w-full">
                            <input
                                type="text"
                                className="bg-transparent text-white w-full pl-6 py-1 outline-none border-b-[1px] border-slate-400"
                                name="searchBar"
                                placeholder="Search"
                            />
                            <span className="pointer absolute left-1 bottom-2/4 translate-y-2/4">
                                <AiOutlineSearch size={16} color="white" />
                            </span>
                        </label>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
