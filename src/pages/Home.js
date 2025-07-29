import React from "react";
import { Link } from "react-router-dom";
import Comment from "../components/Comments";
import Reaction from "../components/Reaction";
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

      <div className="article-body">
        Cats don’t just live in our homes — they rule them. From their silent judgment to their sudden zoomies, cats are full of contradictions. They crave your affection, but only on their terms. They sleep 16 hours a day, but at 3AM, they become acrobats.
        <br /><br />
        Recent studies suggest that cats are far more socially intelligent than we believed. They can recognize your voice, detect your emotions, and even manipulate you — in the most adorable ways possible. That slow blink? It’s their version of “I love you.”
        <br /><br />
        Whether you’re a lifelong cat lover or just confused by their weird behavior, one thing’s for sure: they have us wrapped around their fluffy little paws. And maybe, just maybe, they know exactly what they’re doing.
      </div>

      <hr />

      <Reaction />

      <Comment />
    </div>
  );
};

export default Home;
