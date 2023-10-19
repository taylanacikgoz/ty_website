"use client";

import React from "react";
import Link from "next/link";
import { PiSpeakerSimpleHighLight, PiHeadphones } from "react-icons/pi";

const Navbar = () => {
  return (
    <main className="flex flex-col md:flex md:flex-row justify-between md:items-center p-5 gap-5">
      <Link href="/">
        <h1 className="font-specific text-3xl font-normal cursor-pointer text-white">
          MYBLOG
        </h1>
      </Link>

      <nav className="flex flex-col md:flex md:flex-row lg:gap-20 gap-5 font-bold text-2xl font-content text-white">
        <Link href="/about">About</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/">Contact</Link>
      </nav>
      <div className="flex flex-row gap-5 cursor-pointer">
        <PiSpeakerSimpleHighLight className="object-cover h-8 w-8 text-white hover:text-red-600 " />
        <PiHeadphones className="object-cover h-8 w-8 text-white" />
      </div>
    </main>
  );
};

export default Navbar;
