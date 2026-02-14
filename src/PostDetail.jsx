import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
           throw new Error("Post not found");
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Загрузка...</h2>;
  }

  if (!post) {
      return <h2>Пост не найден</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br />
      <Link to="/posts" style={{ background: "#eee", padding: "5px 10px", textDecoration: "none", borderRadius: "5px" }}>
        ← Назад к списку
      </Link>
    </div>
  );
};

export default PostDetail;