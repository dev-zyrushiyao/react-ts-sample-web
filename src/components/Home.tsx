import BlogList from "./BlogList";
import "../index.css";
import { useState, useEffect } from "react";

//type alias
export type Blog = {
  id: number;
  title: string;
  content: string;
  author: string;
};

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: 1,
      title: "Super Mario Bros 3",
      content: "lorem ipsum...",
      author: "Mario",
    },
    {
      id: 2,
      title: "Super Mario Bros Wonder",
      content: "lorem ipsum...",
      author: "Yoshi",
    },
    {
      id: 3,
      title: "Mario Party",
      content: "lorem ipsum...",
      author: "Peach",
    },
    {
      id: 4,
      title: "Super Mario RPG",
      content: "lorem ipsum...",
      author: "Mario",
    },
  ]);

  useEffect(() => console.log(`USE EFFECT IS TRIGGERED `), [blogs]);

  const handleDelete = (id: number): void => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };

  return (
    <div>
      <h3>This is a Home Page</h3>
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
}
