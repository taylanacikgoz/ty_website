import React from "react";
import Image from "next/image";
import Blackcat from "../../../public/Images/Blackcat.jpg";
import Rocket from "../../../public/Images/Rocket.png";
import { PostCard } from "@/Components/BlogPostCard/PostCard";

async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts");
  return res.json();
}
export default async function Blog() {
  const { posts } = await getPosts();

  return (
    <div className="bg-black text-white flex flex-wrap p-10 border-2 border-solid">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
