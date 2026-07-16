import { Routes, Route } from "react-router";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Create from "./components/Create";
import BlogContent from "./components/BlogContent";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/blogs/:id" element={<BlogContent />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}
