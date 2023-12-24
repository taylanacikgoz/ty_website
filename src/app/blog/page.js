import React from "react";
import Image from "next/image";
import Blackcat from "../../../public/Images/Blackcat.jpg";
import Rocket from "../../../public/Images/Rocket.png";
import { PostCard } from "@/Components/BlogPostCard/PostCard";

async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts", { cache: "no-store" });
  return res.json();
}
export default async function Blog() {
  const { posts } = await getPosts();

  return (
    <div className="w-full bg-black text-white flex flex-wrap p-10">
      {posts.map((post) => (
        <div className="p-10 w-1/2">
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
}
