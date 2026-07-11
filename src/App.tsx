import Home from "./components/Home";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
