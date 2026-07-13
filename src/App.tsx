import { Routes, Route } from "react-router";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Create from "./components/Create";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </div>
    </div>
  );
}
