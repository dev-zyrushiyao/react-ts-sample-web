
import BlogList from "./BlogList";
import "./index.css";

//type alias
export type Blog = {
  id: number;
  title: string;
  content: string;
  author: string;
};

export default function Home() {
  const blogs: Blog[] = [
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
  ];

  return (
    <div>
      <h3>This is a Home Page</h3>
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
}
