import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';

const App = () => {
  const categories = ["Kategori 1", "Kategori 2", "Kategori 3", "Kategori 4", "Kategori 5","Kategori 6","Kategori 7","Kategori 8","Kategori 9",];
  const products = [
    { name: "Kulaklık", description: "Rampa Oyuncu Kulaklığı"},
    { name: "Laptop", description: "Havai Laptop"},
    { name: "Ayakkabı", description: "Abidas ayakkabı"}
  ];

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col xs="3">
            <Categories categories={categories} />
          </Col>
          <Col xs="9">
            <Products products={products} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
