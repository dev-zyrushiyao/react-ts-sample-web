import BlogList from "./BlogList";
import "../index.css";

import useFetch from "../custom-hook/useFetch";

//type alias
export type Blog = {
  id: number;
  title: string;
  content: string;
  author: string;
};

export default function Home() {
  const {data, isLoading, error} = useFetch<Blog[]>("http://localhost:8000/blogs");


  return (
    <div>
      <h3>This is a Home Page</h3>
      {error && (
        <div>
          <label>
            {error.name} : {error.message} - {error.stack}
          </label>
        </div>
      )}
      {isLoading && <div>Loading...</div>}
      {data && <BlogList blogs={data} />}
    </div>
  );
}
