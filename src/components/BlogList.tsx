import type { Blog } from "./Home";

interface BlogListProp {
  blogs: Blog[];
  handleDelete(id: number): void;
}

const BlogList = ({ blogs, handleDelete }: BlogListProp) => {
  return (
    <div className="blog-list">
      <h1>All Blogs</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Author by {blog.author}</p>
          <button type="button" onClick={() => handleDelete(blog.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
