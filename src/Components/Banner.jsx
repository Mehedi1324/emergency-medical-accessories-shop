import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../Stylings/Banner.scss';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
const Banner = () => {
  return (
    <div className="c-arousel" id="home">
      <Carousel fade className="caros">
        {/* _________________First Slide________________ */}

        <Carousel.Item className="slider">
          <Row>
            <Col md={6} lg={6} sm={6} xs={6}>
              <div className="bnr__info">
                <h1 data-aos="fade-down-right">Helping you</h1>
                <h1 data-aos="fade-right">Happy one</h1>
                <p data-aos="fade-right" data-aos-delay="100">
                  Save up to 10% on Lusion brand purchases. Free delivery and
                  easy payment.{' '}
                </p>
                <a href="#newArrival">
                  {' '}
                  <button className="add__btn my-5">Shop Now </button>
                </a>
              </div>
            </Col>
            <Col md={6} lg={6} sm={6} xs={6}>
              <div className="doc_img">
                <div data-aos="fade-down-left" className="cntner">
                  <img src="./images/doc1.png" alt="" />
                  <div className="cnt t1">
                    <img src="./images/mark.png" /> MEDICAL MARK
                  </div>
                  <div className="cnt t2">
                    <img src="./images/stcop.png" />
                    STETHOSCOPE
                  </div>
                  <div className="cnt t3">
                    <img src="./images/hand.png" /> PROTECTIVE GLOVES
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        {/* Second Slide________________ */}

        <Carousel.Item className="slider">
          <Row>
            <Col md={6} lg={6} sm={6} xs={6}>
              <div className="bnr__info">
                <h1 data-aos="fade-down-right">Helping you</h1>
                <h1 data-aos="fade-right">Happy one</h1>
                <p data-aos="fade-right" data-aos-delay="100">
                  Save up to 10% on Lusion brand purchases. Free delivery and
                  easy payment.{' '}
                </p>
                <a href="#newArrival">
                  {' '}
                  <button className="add__btn my-5">Shop Now </button>
                </a>
              </div>
            </Col>
            <Col md={6} lg={6} sm={6} xs={6}>
              <div className="doc_img">
                <div data-aos="fade-down-left" className="cntner">
                  <img src="./images/doc2.png" alt="" />
                  <div className="cnt t1">
                    <img src="./images/mark.png" /> MEDICAL MARK
                  </div>
                  <div className="cnt t2">
                    <img src="./images/stcop.png" />
                    STETHOSCOPE
                  </div>
                  <div className="cnt t3">
                    <img src="./images/hand.png" /> PROTECTIVE GLOVES
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        {/* Third Slide________________ */}

        <Carousel.Item className="slider">
          <Row>
            <Col md={6} lg={6} sm={6} xs={6}>
              <div className="bnr__info">
                <h1 data-aos="fade-down-right">Helping you</h1>
                <h1 data-aos="fade-right">Happy one</h1>
                <p data-aos="fade-right" data-aos-delay="100">
                  Save up to 10% on Lusion brand purchases. Free delivery and
                  easy payment.{' '}
                </p>
                <a href="#newArrival">
                  {' '}
                  <button className="add__btn my-5">Shop Now </button>
                </a>
              </div>
            </Col>
            <Col md={6} lg={6} sm={6} xs={6}>
              <div className="doc_img">
                <div data-aos="fade-down-left" className="cntner">
                  <img src="./images/doc3.png" alt="" />
                  <div className="cnt t1">
                    <img src="./images/mark.png" /> MEDICAL MARK
                  </div>
                  <div className="cnt t2">
                    <img src="./images/stcop.png" />
                    STETHOSCOPE
                  </div>
                  <div className="cnt t3">
                    <img src="./images/hand.png" /> PROTECTIVE GLOVES
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
