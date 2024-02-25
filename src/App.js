import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import CommentSort from "./components/CommentSort";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [replyIndex, setReplyIndex] = useState(null);

  const handlePostComment = (newComment) => {
    setComments((prevComments) => [
      ...prevComments,
      { text: newComment, replies: [], timestamp: new Date(), marked: false },
    ]);
  };

  const handleSort = (sortBy) => {
    let sorted;
    switch (sortBy) {
      case "latest":
        sorted = [...comments].sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        break;
      case "mostReplies":
        sorted = [...comments].sort(
          (a, b) => b.replies.length - a.replies.length
        );
        break;
      default:
        sorted = comments;
    }
    setComments(sorted);
  };

  const handleToggleSortOptions = () => {
    setShowSortOptions((prevState) => !prevState);
  };

  const handleDeleteComment = (index) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  const handleMarkComment = (index) => {
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index ? { ...comment, marked: !comment.marked } : comment
      )
    );
  };

  const handleReply = (index, replyText) => {
    const updatedComments = [...comments];
    updatedComments[index].replies.push({ text: replyText });
    setComments(updatedComments);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <h2>Write a Comment </h2>
          <CommentForm onPostComment={handlePostComment} />
        </Col>
      </Row>
      {comments.length > 0 && (
        <Row className="mt-4">
          <Col xs={12} md={8}>
            <h2>Comments</h2>
            <CommentList
              comments={comments}
              onDeleteComment={handleDeleteComment}
              onMarkComment={handleMarkComment}
              onReply={handleReply}
              replyIndex={replyIndex}
              setReplyIndex={setReplyIndex}
            />
          </Col>
          <Col xs={12} md={4}>
            <div className="d-flex align-items-center justify-content-end">
              <CommentSort onSort={handleSort} />
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CommentSection;
