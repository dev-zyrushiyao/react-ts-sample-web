import type { Blog } from "./Home";

interface BlogListProp {
  blogs: Blog[];
}

const BlogList = ({ blogs }: BlogListProp) => {
  return (
    <div className="blog-list">
      <h1>All Blogs</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Author by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
