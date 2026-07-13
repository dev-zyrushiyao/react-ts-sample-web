import { Link } from "react-router";
import "../index.css";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Welcome to my Blog</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
