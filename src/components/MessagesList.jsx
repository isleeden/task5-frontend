import React from "react";
import Message from "./Message";

export default function MessagesList({ messages }) {
  return (
    <>
      {messages.map((message) => {
        return <Message key={message.id} {...message} />;
      })}
    </>
  );
}
