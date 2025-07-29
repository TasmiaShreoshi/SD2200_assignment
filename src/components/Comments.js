// src/components/Comments.js
import React, { useState } from "react";
import "../styles/comments.css";
import Pagination from "./Pagination";

const Comments = () => {
  const initialComments = [
    {
      id: 1,
      author: "CatLover101",
      date: "2025-07-28",
      content: "Cats are the ultimate stress relief. Fight me.",
      likes: 10,
      dislikes: 2,
      reported: false,
    },
    {
      id: 2,
      author: "WhiskersFan",
      date: "2025-07-27",
      content: "Every cat has a story. Mine stole my sandwich today.",
      likes: 7,
      dislikes: 0,
      reported: false,
    },
    {
      id: 3,
      author: "Purrfectionist",
      date: "2025-07-27",
      content: "Black cats bring luck. Change my mind.",
      likes: 1,
      dislikes: 9,
      reported: false,
    },
    {
      id: 4,
      author: "WhiskerKnight",
      date: "2025-07-26",
      content: "Cat memes are 90% of my personality.",
      likes: 15,
      dislikes: 5,
      reported: false,
    },
    {
      id: 5,
      author: "MittensBoss",
      date: "2025-07-25",
      content: "My cat sleeps more than a sloth on vacation.",
      likes: 6,
      dislikes: 1,
      reported: false,
    },
    {
      id: 6,
      author: "SleepyMeow",
      date: "2025-07-25",
      content: "Their purring is healing, I swear.",
      likes: 18,
      dislikes: 2,
      reported: false,
    },
    {
      id: 7,
      author: "ZoomieQueen",
      date: "2025-07-24",
      content: "3am zoomies are real and terrifying.",
      likes: 11,
      dislikes: 3,
      reported: false,
    },
    {
      id: 8,
      author: "SirScratchalot",
      date: "2025-07-24",
      content: "Scratched my sofa again. Still love him.",
      likes: 13,
      dislikes: 5,
      reported: false,
    },
  ];

  const [comments, setComments] = useState(initialComments);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 6;

  const [newComment, setNewComment] = useState("");

  const indexOfLast = currentPage * commentsPerPage;
  const indexOfFirst = indexOfLast - commentsPerPage;
  const currentComments = comments.slice(indexOfFirst, indexOfLast);

  const handleAction = (id, type) => {
    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id === id) {
          if (type === "like") {
            return { ...comment, likes: comment.likes + 1 };
          } else if (type === "dislike") {
            return { ...comment, dislikes: comment.dislikes + 1 };
          } else if (type === "report") {
            return { ...comment, reported: true };
          }
        }
        return comment;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = newComment.trim();
    if (!trimmed) return;

    const today = new Date().toISOString().split("T")[0];
    const newId = comments.length + 1;

    const newEntry = {
      id: newId,
      author: "You",
      date: today,
      content: trimmed,
      likes: 0,
      dislikes: 0,
      reported: false,
    };

    setComments([newEntry, ...comments]);
    setNewComment("");
    setCurrentPage(1); // Show the newest comment at top
  };

  return (
    <div className="comments-container">
      <h3>Comments ({comments.length})</h3>
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
      <div className="comment-list">
        {currentComments.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="comment-author">
              <a href={`/profile/${comment.author}`}>{comment.author}</a>
              <span className="comment-date">{comment.date}</span>
            </div>
            <p>{comment.content}</p>
            <div className="comment-actions">
              <button onClick={() => handleAction(comment.id, "like")}>
                👍 {comment.likes}
              </button>
              <button onClick={() => handleAction(comment.id, "dislike")}>
                👎 {comment.dislikes}
              </button>
              <button>Reply</button>
              <button
                onClick={() => handleAction(comment.id, "report")}
                disabled={comment.reported}
              >
                {comment.reported ? "Reported" : "Report"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalItems={comments.length}
        itemsPerPage={commentsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Comments;
