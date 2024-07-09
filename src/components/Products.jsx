import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

const Products = ({ products }) => {
  return (
    <div className="my-3">
      <h2>Ürünler</h2>
      <Row>
        {products.map((product, index) => (
          <Col sm="4" key={index}>
            <Card>
              <CardImg top width="100%" src={product.image} alt={product.name} />
              <CardBody>
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardText>{product.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
