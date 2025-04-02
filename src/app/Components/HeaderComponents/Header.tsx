"use client";

import Link from 'next/link';
import { useState, useEffect } from "react";

import SearchBar from './SearchBar';
//import NewRegistration from './NewRegistration'
// import Login from './Login';

function Header() {
  const [headerWidth, setHeaderWidth] = useState(0);

  useEffect(() => {
    const updateHeaderWidth = () => {
      setHeaderWidth(window.innerWidth);
    }
    updateHeaderWidth();

    window.addEventListener("resize", updateHeaderWidth);
    return () => window.removeEventListener("resize", updateHeaderWidth);

  }, []);

  return (
    <header style={{ width: `${headerWidth}px` }} className="bg-white text-[#4F772D] py-4 shadow-md">
      <div  className=" flex  items-center px-16">
        <h1 className="text-xl font-bold ">
          <Link href="/">Soccer Learning</Link>
        </h1>

        <h2 className='text-xl font-bold px-12'>
          <Link href="/">Category</Link>
        </h2>
        <div>
          <SearchBar />
        </div>
        <nav>
          <ul className="flex space-x-8 ml-195">
            <li>
              <Link href="/URL" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/URL" className="hover:underline">Services</Link>
            </li>
            <li>
              <Link href="/URL" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>

      </div>

    </header>
  );
};

export default Header;

