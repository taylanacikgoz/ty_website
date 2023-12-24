import Link from "next/link";
import React from "react";
import Image from "next/image";
import Rocket from "../../../public/Images/Rocket.png";

export const PostCard = ({ title, body, id }) => {
  return (
    <Link
      href={`/blog/${id}`}
      className="w-full lg:w-1/2 border border-solid border-yellow-500"
    >
      <div className="flex flex-col lg:flex lg:flex-row gap-5 border border-solid ">
        <div className=" w-full lg:w-1/2 animate-pulse">
          <Image
            src={`https://picsum.photos/200?random=${id}`}
            width={400}
            height={400}
            alt="Post Figure"
            className="rounded-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-3 justify-between">
          <h2 className="font-bold sm:text-base md:text-xl lg:text-2xl first-letter:text-4xl">
            {title}
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
    </Link>
  );
};
