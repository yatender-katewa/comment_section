import React from "react";
import { Button } from "react-bootstrap";
import ReplyForm from "./ReplyForm";
const CommentList = ({
  comments,
  onDeleteComment,
  onMarkComment,
  onReply,
  replyIndex,
  setReplyIndex,
}) => {
  const handleDelete = (index) => {
    onDeleteComment(index);
  };

  const handleMark = (index) => {
    onMarkComment(index);
  };

  const handleToggleReplyForm = (index) => {
    setReplyIndex(replyIndex === index ? null : index);
  };

  const renderReplies = (replies) => {
    return replies.map((reply, index) => (
      <div key={index} style={{ marginLeft: "20px" }}>
        <p>{reply.text}</p>
      </div>
    ));
  };

  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.text}</p>
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleDelete(index)}
          >
            Delete
          </Button>{" "}
          <Button
            size="sm"
            variant={comment.marked ? "warning" : "secondary"}
            onClick={() => handleMark(index)}
          >
            {comment.marked ? "Unmark" : "Mark"}
          </Button>{" "}
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleToggleReplyForm(index)}
          >
            {replyIndex === index ? "Hide Reply" : "Reply"}
          </Button>{" "}
          {replyIndex === index && (
            <div style={{ marginLeft: "20px" }}>
              <ReplyForm
                onReply={(replyText) => onReply(index, replyText)}
                numReplies={comment.replies.length}
              />
              {renderReplies(comment.replies)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
