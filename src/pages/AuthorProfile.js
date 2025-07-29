import React from "react";
import "../styles/authorProfile.css";

const AuthorProfile = () => {
  return (
    <div className="author-profile-container">
      <div className="profile-header">
        <div className="profile-avatar" />
        <div>
          <h2 className="author-name">Mira</h2>
          <p className="author-bio">
            A self-proclaimed cat whisperer, Mira writes about feline behavior, coffee addiction, and why cats probably think they’re better than us.
          </p>
        </div>
      </div>

      <div className="author-articles">
        <h3>Articles by Mira</h3>
        <ul>
          <li>The Secret Life of Cats: What They’re Really Thinking</li>
          <li>5 Ways Cats Manipulate Their Humans (And Why We Let Them)</li>
          <li>How My Cat Helped Me Survive Finals Week</li>
        </ul>
      </div>
    </div>
  );
};

export default AuthorProfile;
