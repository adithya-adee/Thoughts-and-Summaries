"use client";
import { Blog } from "@/type/BlogType";
import React, { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

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
      setBlogs(
        data.blogList.map((blog: Blog) => ({
          ...blog,
          date: new Date(blog.date),
        }))
      );
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      <ul className="mt-16">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>
              {blog.title}
              <span>{blog.tags}</span>
            </h2>
            <p>{blog.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
