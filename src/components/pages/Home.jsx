import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Menu from "../Menu";
import MessagesList from "../MessagesList";
import { Service } from "../../api";
import { useNavigate } from "react-router-dom";

export default function Home({ name, setName }) {
  const [messages, setMessages] = useState([]);
  const [title, setTitle] = useState("Inbox");
  const navigate = useNavigate();

  const getInbox = async () => {
    const res = await Service.getInbox(name);
    setTitle("Inbox");
    setMessages(res?.data?.messages);
  };

  const getSent = async () => {
    const res = await Service.getSent(name);
    setTitle("Sent");
    setMessages(res?.data?.messages);
  };

  const logOut = () => {
    setName("");
  };

  const onSendPage = async () => {
    navigate("/send");
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      if (title === "Inbox") {
        getInbox();
      }
      if (title === "Sent") {
        getSent();
      }
    }, 3000);
    return () => {
      clearInterval(timerId);
    };
  }, [title]);

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h1 className="text-primary">Welcome {name}</h1>
        <Button onClick={logOut} className="mb-2">
          Logout
        </Button>
      </div>
      <Row>
        <h2 className="mb-4">{title}</h2>
        <Col sm="4">
          <Menu
            onInboxClick={getInbox}
            onSentClick={getSent}
            onSendClick={onSendPage}
          />
        </Col>
        <Col sm="8">
          <MessagesList messages={messages} />
        </Col>
      </Row>
    </Container>
  );
}
