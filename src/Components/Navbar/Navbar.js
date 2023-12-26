"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  PiSpeakerSimpleHighLight,
  PiSpeakerSimpleXLight,
  PiHeadphones,
} from "react-icons/pi";
import Audio1 from "../../../public/Audio/Audio1.mp3";

const Navbar = () => {
  const [isSoundOpen, setIsSoundOpen] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (audio === null) {
      setAudio(new Audio(Audio1));
    }
  }, []);

  const handleSoundOpener = async () => {
    if (audio) {
      await audio.play();
      setIsSoundOpen(true);
    }
  };

  const handleSoundCloser = async () => {
    if (audio) {
      audio.pause();
      setIsSoundOpen(false);
    }
  };
  return (
    <main className="flex flex-col md:flex md:flex-row justify-between md:items-center p-5 gap-5">
      <Link href="/">
        <h1 className="font-specific text-3xl font-normal cursor-pointer text-white">
          MYBLOG
        </h1>
      </Link>

      <nav className="flex flex-col md:flex md:flex-row lg:gap-20 gap-5 font-bold text-2xl font-content text-white">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="flex flex-row gap-5 cursor-pointer">
        {isSoundOpen ? (
          <PiSpeakerSimpleXLight
            onClick={handleSoundCloser}
            className="object-cover h-8 w-8 text-white hover:text-red-600 "
          />
        ) : (
          <PiSpeakerSimpleHighLight
            onClick={handleSoundOpener}
            className="object-cover h-8 w-8 text-white hover:text-red-600 "
          />
        )}
        <PiHeadphones className="object-cover h-8 w-8 text-white" />
      </div>
    </main>
  );
};

export default Navbar;
