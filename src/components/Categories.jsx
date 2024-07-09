import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Categories = ({ categories }) => {
  return (
    <div className="my-3">
      <h2>Kategoriler</h2>
      <ListGroup>
        {categories.map((category, index) => (
          <ListGroupItem key={index}>{category}</ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default Categories;
