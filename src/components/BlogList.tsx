import type { Blog } from "./Home";

interface BlogListProp {
  blogs: Blog[];
  title: string;
}

const BlogList = ({ blogs, title }: BlogListProp) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <label>Author by {blog.author}</label>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
