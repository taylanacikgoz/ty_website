import React from "react";
import { PostCard } from "@/Components/BlogPostCard/PostCard";
import Header from "@/Components/Header/Header";

async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts/?limit=10", {
    cache: "no-store",
  });
  return res.json();
}
export default async function Blog() {
  const { posts } = await getPosts();

  return (
    <main className="bg-[url('../../public/Images/blog.jpg')] object-cover bg-cover bg-center bg-no-repeat text-white flex flex-col">
      <Header />
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div className="p-10 w-1/2">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </main>
  );
}
