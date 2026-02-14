import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <div>
      <h1>Список постов</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong> —{" "}
            <Link to={`/posts/${post.id}`}>Читать далее</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;