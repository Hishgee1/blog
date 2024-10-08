import React, { useContext } from "react";
import Link from "next/link";
import Hero from "./Hero/Hero";
import { useEffect, useState } from "react";
import { SearchContext } from "@/pages/provider/search-provider";

const Header = () => {
  const {setSearchValue} = useContext (SearchContext)
  const handleChange = (e) =>{
        setSearchValue(e.target.value)
 }
  return (
    <header className="flex max-w-[1200px] m-auto justify-between p-5 items-center  ">
      <img src="/images/Logo.png" alt="logo" />
      <ul className="flex gap-10">
        <li>
          <Link href="/Home">Home</Link>
        </li>
        <li>
          <Link href="/blog/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/sing">Single Post</Link>
        </li>
        <li>
          <Link href="/Errors">Error</Link>
        </li>
      </ul>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        className="border border-solid p-1"
      />
    
    </header>
  );
};

export default Header;
