import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Добро пожаловать в мой мини-блог</h1>
      <Link to="/posts">Перейти к списку постов</Link>
    </div>
  );
};

export default Home;