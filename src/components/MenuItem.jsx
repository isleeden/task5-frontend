import React from 'react';
import { ListGroup } from 'react-bootstrap';

const MenuItem = ({text, onClick}) => {
  return (
    <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
    onClick={onClick}
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{text}</div>
    </div>
  </ListGroup.Item>
  );
}

export default MenuItem;
