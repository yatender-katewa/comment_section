import React from "react";
import { Dropdown } from "react-bootstrap";

const CommentSort = ({ onSort }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onSort("latest")}>Latest</Dropdown.Item>
        <Dropdown.Item onClick={() => onSort("mostReplies")}>
          Most Replies
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CommentSort;
