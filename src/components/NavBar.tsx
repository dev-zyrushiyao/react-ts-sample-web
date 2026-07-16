import { Link } from "react-router";
import "../index.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <h1>Zyrus Hiyao</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
