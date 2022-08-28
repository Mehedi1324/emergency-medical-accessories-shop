import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Stylings/Order.scss';
const Order = () => {
  return (
    <div className="orders">
      <Row className="row">
        <Col md={12} lg={7} sm={12} xs={12}>
          <h2 data-aos="fade-right">Buyer information</h2>
          <h4 data-aos="fade-right"></h4>
          <form>
            <Row className="form__row" data-aos="fade-down">
              <Col md={6} lg={6} sm={12} xs={12}>
                <input type="text" placeholder="First name" />
              </Col>
              <Col md={6} lg={6} sm={12} xs={12}>
                <input type="text" placeholder="Last name" />
              </Col>
              <Col md={6} lg={6} sm={12} xs={12}>
                <input type="email" placeholder="Email address" />
              </Col>
              <Col md={6} lg={6} sm={12} xs={12}>
                <input type="text" placeholder="Phone number" />
              </Col>
              <Col md={12} lg={12} sm={12} xs={12}>
                <input type="text" placeholder="Street address" />
              </Col>
              <Col md={6} lg={6} sm={12} xs={12}>
                <input type="text" placeholder="Apartment, Suite, House no" />
              </Col>
              <Col md={6} lg={6} sm={12} xs={12}>
                <input type="text" placeholder="dropdown" />
              </Col>
              <Col md={6} lg={6} sm={12} xs={12}>
                <input type="text" placeholder="dropdown" />
              </Col>
              <Col md={6} lg={6} sm={12} xs={12}>
                <input type="text" placeholder="dropdown" />
              </Col>
              <Col md={6} lg={6} sm={12} xs={12}>
                <input type="password" placeholder="password no." />
              </Col>
              <Col md={6} lg={6} sm={12} xs={12}>
                <input type="text" placeholder="Visa no." />
              </Col>
            </Row>
          </form>

          {/* Payment_______ */}

          <div className="payment" data-aos="fade-right">
            <h3 data-aos="fade-right">Payment method</h3>
            <h4></h4>
            <div className="payment__method">
              <div className="method">
                <input type="radio" name="radio" />
                <p>Payment by card</p>
              </div>
              <div className="method">
                <input type="radio" name="radio" />
                <p>Paypal</p>
              </div>
              <div className="method">
                <input type="radio" name="radio" />
                <p>Payoneer</p>
              </div>
              <div className="method">
                <input type="radio" name="radio" />
                <p>Cash on delivery</p>
              </div>
            </div>
            <div className="method agree">
              <input type="radio" name="radio" />

              <p>
                I read and accept all{' '}
                <span style={{ color: '#8b3eea' }}>Terms and conditios</span>
              </p>
            </div>
            <div className="button ">
              <input className="pay__btn" type="submit" value="Pay now" />
            </div>
          </div>
        </Col>
        <Col
          md={12}
          lg={5}
          sm={12}
          xs={12}
          className="col2"
          data-aos="fade-down"
        >
          {/* Coupon */}
          <div className="form__row" data-aos="fade-down">
            <h5>Coupon Code</h5>
            <input type="text" />
            <div className="btn">
              <input type="submit" value="Apply Voucher" />
            </div>
          </div>

          {/* Cost */}
          <div className="form__row" data-aos="fade-down">
            <h5>Product Cost</h5>
            <div className="total__cost">
              <div className="total__price">
                <p>Resedence : </p>
                <p> $ 100</p>
              </div>
              <div className="total__price">
                <p>Flight : </p>
                <p> $ 100</p>
              </div>
              <div className="total__price">
                <p>Vat : </p>
                <p>
                  {' '}
                  $ 100{' '}
                  <span style={{ fontSize: '14px', color: 'red' }}>
                    (tax is 8%)
                  </span>
                </p>
              </div>
              <div className="total__price total">
                <h6>Total Cost : </h6>
                <h6> $ 1500</h6>
              </div>
            </div>
          </div>
          {/* ____ */}
          {/*________ Coupon ___________ */}
          <div className="place__order">
            <input type="submit" value="Place Order" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Order;
