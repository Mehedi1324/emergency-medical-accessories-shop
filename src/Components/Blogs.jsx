import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Stylings/Blogs.scss';
const Blogs = () => {
  return (
    <div className="container">
      <div className="title ti__b">
        <h2 data-aos="fade-right" data-aos-delay="500">
          LATEST FROM BLOG
        </h2>
        <p data-aos="fade-left" data-aos-delay="500">
          The freshest and most exciting news
        </p>
      </div>
      <Row>
        <Col md={6} lg={4} sm={12} data-aos="fade-down">
          <div className="col">
            <img src="./images/child.jpg" alt="" />
            <div className="b__detail">
              <h5>Medical Checkup</h5>
              <p>By Lorem Bhai on july 20, 2022</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                doloribus a sed consectetur, beatae explicabo deleniti excepturi
                perspiciatis reprehenderit voluptates!
              </p>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4} sm={12} data-aos="fade-down">
          <div className="col">
            <img src="./images/oldman.jpg" alt="" />
            <div className="b__detail">
              <h5>Medical Exam At Hospital</h5>
              <p>By Lorem Bhai on july 20, 2022</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                doloribus a sed consectetur, beatae explicabo deleniti excepturi
                perspiciatis reprehenderit voluptates!
              </p>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4} sm={12} data-aos="fade-down">
          <div className="col">
            <img src="./images/mechine.jpg" alt="" />
            <div className="b__detail">
              <h5>Medical Equipment</h5>
              <p>By Lorem Bhai on july 20, 2022</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                doloribus a sed consectetur, beatae explicabo deleniti excepturi
                perspiciatis reprehenderit voluptates!
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Blogs;
