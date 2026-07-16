import { Link } from "react-router";
import type { Blog } from "./Home";

interface BlogListProp {
  blogs: Blog[];
}

const BlogList = ({ blogs }: BlogListProp) => {
  return (
    <div className="blog-list">
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} key={blog.id}>
          <div className="blog-preview">
            <h3>{blog.title}</h3>
            <p>Author by {blog.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
