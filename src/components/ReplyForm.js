import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ReplyForm = ({ onReply, numReplies }) => {
  const [replyText, setReplyText] = useState("");
  const [replyCount, setReplyCount] = useState(numReplies);

  const handleReply = () => {
    if (replyText.trim() !== "" && replyCount < 3) {
      onReply(replyText);
      setReplyText("");
      setReplyCount(replyCount + 1);
    }
  };

  return (
    <Form>
      <Form.Group controlId="formReply">
        <Form.Control
          as="textarea"
          rows={2}
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Write your reply..."
        />
      </Form.Group>
      <Button variant="primary" size="sm" onClick={handleReply}>
        Reply
      </Button>
    </Form>
  );
};

export default ReplyForm;
