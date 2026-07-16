import { Link } from "react-router";

function NotFound() {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>The page cannot be found</p>
      <Link to="/">Go to HomePage</Link>
    </div>
  );
}

export default NotFound;
