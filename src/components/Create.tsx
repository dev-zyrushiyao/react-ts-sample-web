import React, { useState } from "react";
import { useNavigate } from "react-router";

const Create = () => {
  //hooks
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("mario");
  const [isPending, setIsPending] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleSubmit(e: React.ChangeEvent): void {
    e.preventDefault();

    setIsPending(true);

    const blog = { title, content, author };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async () => {
      await setTimeout(() => {
        setIsPending(false);
        navigate("/");
      }, 1000);
    });
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>Create Blog</h2>
        <div>
          <label>Blog Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Blog Body:</label>
          <textarea
            name=""
            id=""
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
        </div>

        {isPending ? (
          <button disabled={true} style={{ backgroundColor: "grey" }}>
            adding blog...
          </button>
        ) : (
          <button>Add Blog</button>
        )}
      </form>
    </div>
  );
};

export default Create;
