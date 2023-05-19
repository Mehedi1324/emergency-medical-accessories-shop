import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import FeProduct from './FeProduct';

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://medi-kit.onrender.com/feature')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container" id="fiatureProduct">
      <div className="title">
        <h2 data-aos="zoom-in">FEARTURE PRODUCT</h2>
        <p data-aos="zoom-in">
          Pellentesque posuere orci lobortis scelerisque blandit.
        </p>
      </div>
      <Row>
        <Col md={12} lg={12} sm={12}>
          <Row data-aos="fade-down" data-aos-delay="200">
            {products.map((product) => (
              <FeProduct product={product} key={product._id} />
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default FeatureProducts;
