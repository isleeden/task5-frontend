import React from "react";
import { ListGroup } from "react-bootstrap";
import MenuItem from "./MenuItem";

export default function Menu({ onInboxClick, onSentClick, onSendClick }) {
  return (
    <ListGroup as="ol" numbered>
      <MenuItem text="Inbox" onClick={onInboxClick} />
      <MenuItem text="Sent" onClick={onSentClick} />
      <MenuItem text="Send Message" onClick={onSendClick} />
    </ListGroup>
  );
}
