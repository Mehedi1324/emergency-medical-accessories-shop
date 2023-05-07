import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NProduct from './NProduct';
import '../Stylings/NewArrivals.scss';
// import { Col, Row } from 'react-bootstrap';
// import NProduct from './NProduct';

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://medikit-server.vercel.app/feature')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container" id="newArrival">
      <div className="title">
        <div className="d-flex">
          <h2 data-aos="zoom-in">NEW ARRIVALS</h2>
        </div>

        <p data-aos="zoom-in">
          Pellentesque posuere orci lobortis scelerisque blandit.
        </p>
      </div>
      <div>
        <Row>
          <Col md={12} lg={12} sm={12}>
            <Row data-aos="fade-down">
              {products.map((product) => (
                <NProduct product={product} key={product._id} />
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NewArrivals;
