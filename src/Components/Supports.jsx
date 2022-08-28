import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Stylings/Supports.css';
import { AiFillCar } from 'react-icons/ai';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { GiReturnArrow } from 'react-icons/gi';
import { AiTwotoneLike } from 'react-icons/ai';
const Supports = () => {
  return (
    <div className="support__container">
      <Row className="supports">
        <Col
          md={6}
          lg={3}
          sm={12}
          data-aos="fade-up-right"
          data-aos-delay="100"
        >
          <div className="services">
            <section className="icon">
              <AiFillCar style={{ fontSize: '50px', color: '#747371' }} />
            </section>
            <div>
              <h4>FREE SHIPPING</h4>
              <p>Free shipping on all US order or order above $200</p>
            </div>
          </div>
        </Col>
        <Col
          md={6}
          lg={3}
          sm={12}
          data-aos="fade-up-right"
          data-aos-delay="200"
        >
          <div className="services">
            <section className="icon">
              <RiCustomerService2Fill
                style={{ fontSize: '50px', color: '#747371' }}
              />
            </section>
            <div>
              <h4>SUPPORT 24/7</h4>
              <p>Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </Col>
        <Col
          md={6}
          lg={3}
          sm={12}
          data-aos="fade-up-right"
          data-aos-delay="300"
        >
          <div className="services">
            <section className="icon">
              <GiReturnArrow style={{ fontSize: '50px', color: '#747371' }} />
            </section>
            <div>
              <h4>30 DAYS RETURN</h4>
              <p>Simply return it within 30 days for an exchange.</p>
            </div>
          </div>
        </Col>
        <Col
          md={6}
          lg={3}
          sm={12}
          data-aos="fade-up-right"
          data-aos-delay="400"
        >
          <div className="services">
            <section className="icon">
              <AiTwotoneLike style={{ fontSize: '50px', color: '#747371' }} />
            </section>
            <div>
              <h4>100% PAYMENT SECURE</h4>
              <p>We ensure secure payment with PEV</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Supports;
