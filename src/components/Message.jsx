import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const Message = ({
  id,
  title,
  author,
  recipient,
  message,
  replyId,
  replyTo,
  hideReply,
}) => {
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between">
        <h4>
          <Link to={`/${id}`}>{title}</Link>
        </h4>
        {replyId && !replyTo ? (
          <Link to={`/${replyId}`}>this is a reply to a message</Link>
        ) : (
          ""
        )}
      </Card.Header>
      <Card.Body>
        <p className="text-small">
          From: <em>{author}</em>
        </p>
        <p className="text-small">
          For: <em>{recipient}</em>
        </p>
        <hr></hr>
        <div>
          <ReactMarkdown>{message}</ReactMarkdown>
        </div>
      </Card.Body>
      {!hideReply && (
        <Card.Footer className={replyTo ? "" : "d-flex justify-content-end"}>
          {replyTo ? (
            <>
              <div className="d-flex justify-content-end">
                <Button variant="info">
                  <Link to={`/send?replyId=${id}&recipient=${author}`}>
                    Reply
                  </Link>
                </Button>
              </div>
              <h4>Replied To</h4>
              <Message hideReply={true} {...replyTo} />
            </>
          ) : (
            <Button variant="info">
              <Link to={`/send?replyId=${id}&recipient=${author}`}>Reply</Link>
            </Button>
          )}
        </Card.Footer>
      )}
    </Card>
  );
};

export default Message;
