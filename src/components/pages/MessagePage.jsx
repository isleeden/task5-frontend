import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Service } from "../../api";
import Message from "../Message";

export default function MessagePage() {
  let { id } = useParams();
  const [data, setData] = useState({});

  const getMessage = async () => {
    const res = await Service.getMessage(id);
    setData(res?.data);
  };

  useEffect(() => {
    getMessage();
  }, [id]);

  return (
    <Container className="mt-5">
      <div className="mb-3">
        <Link to="/">{"Back to home <-"}</Link>
      </div>
      <Message {...data.message} replyTo={data.replyTo} />
    </Container>
  );
}
