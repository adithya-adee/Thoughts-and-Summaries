"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { Blog } from "@/type/BlogType";

export default function BlogDetail() {
  const params = useParams<{
    slug: string;
  }>();

  const [blogs, setBlogs] = useState<Blog>();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blogs", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.blogList);
        setBlogs(data.blogList.find((blog: Blog) => blog.id === params.slug));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return <>{blogs && <div>{blogs.blog}</div>}</>;
}
