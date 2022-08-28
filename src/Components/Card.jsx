import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import '../Stylings/Card.scss';
const Card = () => {
  return (
    <div className="card">
      <Row>
        <Col md={7} lg={7} sm={12} xs={12} data-aos="fade-right">
          <div className="booked__place">
            <div className="place__info">
              <img src="./image/imagination3.png" alt="" />
              <div>
                <h6>Title</h6>
                <p>Rating</p>
                <p>Price</p>
              </div>
            </div>

            <div className="quantity">
              <FaMinus />
              <input value="1" />
              <FaPlus />
            </div>
            <div className="delete">
              <MdDelete />
            </div>
          </div>

          {/* ALga Khatni */}

          <div className="booked__place">
            <div className="place__info">
              <img src="./image/imagination3.png" alt="" />
              <div>
                <h6>Title</h6>
                <p>Rating</p>
                <p>Price</p>
              </div>
            </div>

            <div className="quantity">
              <FaMinus />
              <input value="1" />
              <FaPlus />
            </div>
            <div className="delete">
              <MdDelete />
            </div>
          </div>
          <div className="booked__place">
            <div className="place__info">
              <img src="./image/imagination3.png" alt="" />
              <div>
                <h6>Title</h6>
                <p>Rating</p>
                <p>Price</p>
              </div>
            </div>

            <div className="quantity">
              <FaMinus />
              <input value="1" />
              <FaPlus />
            </div>
            <div className="delete">
              <MdDelete />
            </div>
          </div>
          <div className="booked__place">
            <div className="place__info">
              <img src="./image/imagination3.png" alt="" />
              <div>
                <h6>Title</h6>
                <p>Rating</p>
                <p>Price</p>
              </div>
            </div>

            <div className="quantity">
              <FaMinus />
              <input value="1" />
              <FaPlus />
            </div>
            <div className="delete">
              <MdDelete />
            </div>
          </div>

          {/* ________ */}
        </Col>
        <Col md={5} lg={5} sm={12} xs={12} data-aos="fade-left">
          <div className="form__row card__total">
            <h5>Booking Amounts</h5>
            <div className="total__cost">
              <div className="total__price">
                <p>Total Bookings : </p>
                <p> 5 </p>
              </div>
              <div className="total__price">
                <p>Product Price : </p>
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
            <div className="place__order">
              <input type="submit" value="Place Order" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Card;
