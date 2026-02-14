import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
import "./App.css"; // Можно оставить стандартные стили или очистить

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        {/* Навигация (необязательно, но удобно для тестов) */}
        <nav style={{ marginBottom: "20px", borderBottom: "1px solid #ccc" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Главная</Link>
          <Link to="/posts">Посты</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;