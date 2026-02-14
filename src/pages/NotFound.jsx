import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "red" }}>404</h1>
      <h2>Страница не найдена</h2>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default NotFound;