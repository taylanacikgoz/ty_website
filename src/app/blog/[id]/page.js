import React from "react";
import Image from "next/image";

const getPost = async (id) => {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  return response.json();
};
export default async function BlogPost({ params }) {
  const { id, title, body } = await getPost(params.id);

  return (
    <div>
      <Image
        src={`https://picsum.photos/960/400?random=${id}`}
        alt={title}
        width={150}
        height={150}
      />
      <div>{title}</div>
      <div>{body}</div>
    </div>
  );
}
