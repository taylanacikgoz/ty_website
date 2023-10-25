"use client";

import React from "react";
import Image from "next/image";
import Blackcat from "../../../public/Images/Blackcat.jpg";
import Rocket from "../../../public/Images/Rocket.png";

export default function Blog() {
  return (
    <main className="bg-black min-h-screen">
      <section className="flex lg:flex lg:flex-row lg:flex-wrap gap-5 text-white p-20 font-content w-full border border-solid">
        <div className="flex flex-col lg:flex lg:flex-row items-top gap-10 w-full lg:w-1/2 border border-solid">
          <div className="w-full md:w-1/2 animate-pulse">
            <Image
              src={Blackcat}
              width={400}
              height={400}
              alt="Post Figure"
              className="border border-solid rounded-full object-cover "
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <h2 className="font-bold sm:text-2xl first-letter:text-7xl">
              The First Programmer on Pluto:A Tale of Technological Triumph
            </h2>
            <span className="text-sm">June 15, 2023</span>
            <br />
            <div className="flex flex-row gap-3 items-center">
              <span className="underline decoration-2 decoration-wavy hover:underline-offset-2 hover:underline hover:decoration-red-500">
                Read More
              </span>
              <Image
                src={Rocket}
                alt=""
                width={56}
                height={56}
                className="object-cover transition ease-in-out delay-3000 hover:-translate-y-20"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row items-top gap-10 w-full lg:w-1/2 border border-solid">
          <div className="w-full md:w-1/2 animate-pulse">
            <Image
              src={Blackcat}
              width={400}
              height={400}
              alt="Post Figure"
              className="border border-solid rounded-full object-cover "
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <h2 className="font-bold sm:text-2xl first-letter:text-7xl">
              The First Programmer on Pluto:A Tale of Technological Triumph
            </h2>
            <span className="text-sm">June 15, 2023</span>
            <br />
            <div className="flex flex-row gap-3 items-center">
              <span className="underline decoration-2 decoration-wavy hover:underline-offset-2 hover:underline hover:decoration-red-500">
                Read More
              </span>
              <Image
                src={Rocket}
                alt=""
                width={56}
                height={56}
                className="object-cover transition ease-in-out delay-3000 hover:-translate-y-20"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
