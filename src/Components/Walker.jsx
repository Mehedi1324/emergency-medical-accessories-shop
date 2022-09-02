import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Stylings/Walker.scss';
const Walker = () => {
  const price = 329.0;
  return (
    <div className="medical__walker container">
      <Row>
        <Col md={6} lg={6} sm={12} data-aos="fade-right">
          <img src="./images/walker.jpg" alt="" />
        </Col>
        <Col className="col2 pb-5" md={6} lg={6} sm={12} data-aos="fade-left">
          <div>
            <h3> DRIVE MEDICAL WALKER</h3>
            <p className="p1"> $ {price}</p>
            <p className="previous__price">$350.00</p>
            <p className="p2 my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
            <a href="#fiatureProduct">
              {' '}
              <button className="add__btn">Check Our Collections </button>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Walker;
