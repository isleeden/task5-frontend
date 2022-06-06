import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { Service } from "../../api";

export default function SendMessage({ author }) {
  const [recipients, setRecipients] = useState([""]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const mdParser = new MarkdownIt();

  function handleEditorChange({ html, text }) {
    setMessage(text);
  }

  const onRecipientChange = (idx) => {
    return (e) => {
      let newArr = [...recipients];
      newArr[idx] = e.target.value;
      setRecipients(newArr);
    };
  };

  const replyId = searchParams.get("replyId");
  const recipientReply = searchParams.get("recipient");

  const handleSubmit = (e) => {
    e.preventDefault();

    Service.sendMessage({
      author,
      message,
      title,
      recipients,
      replyId,
    });
  };

  const addRecipient = () => {
    setRecipients([...recipients, ""]);
  };

  const removeRecipient = () => {
    let newArr = [...recipients];
    newArr.pop();
    setRecipients([...newArr]);
  };

  useEffect(() => {
    if (recipientReply) {
      setRecipients([recipientReply]);
    }
  }, []);

  return (
    <Container className="mt-5">
      <div>
        <Link to="/">{"Back to home <-"}</Link>
      </div>
      <h2 className="my-3">Send Message</h2>
      <Form className="m-auto mt-5" onSubmit={handleSubmit}>
        {recipients.map((value, idx) => {
          return (
            <Form.Group key={idx} as={Row} className="mb-3 w-75">
              <Form.Label column sm="1">
                {idx === 0 && "For"}
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  value={value}
                  plaintext={recipientReply ? true : false}
                  readOnly={recipientReply ? true : false}
                  onChange={onRecipientChange(idx)}
                />
              </Col>
              {idx === 0 && !recipientReply && (
                <Col sm="auto">
                  <ButtonGroup>
                    <Button variant="success" onClick={addRecipient}>
                      Add
                    </Button>
                    <Button variant="danger" onClick={removeRecipient}>
                      Remove
                    </Button>
                  </ButtonGroup>
                </Col>
              )}
            </Form.Group>
          );
        })}
        <Form.Group as={Row} className="mb-3 w-75">
          <Form.Label column sm="1">
            Title
          </Form.Label>
          <Col sm="7">
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Label>Message:</Form.Label>
        <MdEditor
          style={{ height: "500px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
        <Button className="mt-4" size="lg" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
