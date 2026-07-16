import { useNavigate, useParams } from "react-router";
import useFetch from "../custom-hook/UseFetch";
import type { Blog } from "./Home";

export default function BlogContent() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch<Blog>(
    `http://localhost:8000/blogs/${id}`,
  );

  const navigate = useNavigate();

  function handleClick(): void {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate("/"));
  }

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.name}</div>}
      {data && (
        <div>
          <article>
            <h2>{data.title}</h2>
            <p>Author: {data.author}</p>
            <hr></hr>
            <div>
              <p>{data.content}</p>
            </div>
            <button onClick={handleClick}> delete </button>
          </article>
        </div>
      )}
    </div>
  );
}
