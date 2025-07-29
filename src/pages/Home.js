import React from "react";
import { Link } from "react-router-dom";
import Comment from "../components/Comments";
import Reaction from "../components/Reaction";
import Article from "../components/Articles" 
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="breadcrumb">
        <Link to="#">Animals</Link> <span>&gt;</span> <Link to="#">Cats</Link>
      </div>

      <h1 className="article-title">
        The Secret Life of Cats: What They’re Really Thinking
      </h1>

      <p className="subtitle">
        From knocking things off shelves to vanishing at 3AM, cats have a mysterious logic of their own — and science is just starting to catch up.
      </p>

      <div className="main-image cat" />

      <p className="subtext">
        They stare into the void. They sprint at invisible ghosts. But behind those whiskers, cats are quietly brilliant — and hilariously weird.
      </p>

      <div className="author-box">
        <div className="author-avatar" />
        <div className="author-info">
          <Link to="/author/1" className="author-name">Mira</Link>
          <p className="article-date">July 29, 2025</p>
        </div>
      </div>

      <hr />

      <Article />

      <hr />

      <Reaction />
      <Comment />
    </div>
  );
};

export default Home;
