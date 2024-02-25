import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const CommentForm = ({ onPostComment }) => {
  const [newComment, setNewComment] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNewComment(value);
    setIsTyping(value.trim() !== "");
  };

  const handlePost = () => {
    if (newComment.trim() !== "") {
      onPostComment(newComment);
      setNewComment("");
      setIsTyping(false);
    }
  };

  return (
    <Row>
      <Col>
        <Form.Group
          controlId="formComment"
          className="d-flex align-items-center"
        >
          <Form.Label className="mr-5 ">Write your comment:</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            value={newComment}
            onChange={handleInputChange}
            placeholder="Write your comment..."
          />
          {isTyping && (
            <Button variant="primary" className="ml-2" onClick={handlePost}>
              Post Comment
            </Button>
          )}
        </Form.Group>
      </Col>
    </Row>
  );
};

export default CommentForm;
