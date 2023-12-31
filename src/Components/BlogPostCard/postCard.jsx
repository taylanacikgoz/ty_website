import Link from "next/link";
import React from "react";
import Image from "next/image";
import Rocket from "../../../public/Images/Rocket.png";

export const PostCard = ({ title, body, id }) => {
  return (
    <Link
      key={id}
      href={`/blog/${id}`}
      className="w-full overflow-hidden rounded-lg"
    >
      <div className="flex flex-1 h-full flex-col md:flex-row items-start gap-4 bg-[#010b28] p-5 rounded-lg">
        <div className="flex-shrink-0 w-36 h-36 relative rounded-full">
          <Image
            src={`https://picsum.photos/200?random=${id}`}
            fill
            alt="Post Figure"
            className="object-cover rounded-full"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 justify-between">
          <h2 className="font-bold text-xl first-letter:text-4xl antialiased ...">
            {title}
          </h2>
          <div>
            <p className="text-[8px] italic ...">Posted on June 15, 2023</p>
            <div className="flex flex-row gap-3 items-center pt-2">
              <span className="underline decoration-2 decoration-wavy hover:underline-offset-2 hover:decoration-red-500">
                Read More
              </span>

              <div className="w-14 h-14 relative">
                <Image
                  src={Rocket}
                  alt="Read more rocket icon"
                  fill
                  className="object-cover transition ease-in-out delay-3000 hover:-translate-y-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
