import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, deleteFromCart } from '../actions/cartAction';
import '../Stylings/Card.scss';
import Rating from './Rating';
const Card = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const subTotal = cartItems.reduce(
    (x, item) => x + item.price * item.quantity,
    0
  );
  const vat = parseFloat((subTotal * 0.1).toFixed(2));
  const finalTotal = subTotal + vat;
  const totalProduct = cartItems.reduce((x, item) => x + item.quantity, 0);
  return (
    <div className="card">
      <Row>
        <Col md={7} lg={7} sm={12} xs={12} data-aos="fade-right">
          {cartItems.map((item) => (
            <div className="booked__place">
              <div className="info__cart">
                <div>
                  <img src={item.image} alt="" />
                </div>

                <div>
                  <h6>{item.name}</h6>
                  <div>
                    <Rating item={item} key={item.name} />
                  </div>
                  <p>$ {item.price * item.quantity}</p>
                </div>
              </div>

              <div className="quantity">
                <FaMinus
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity - 1));
                  }}
                />
                <span>{item.quantity}</span>
                <FaPlus
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity + 1));
                  }}
                />
              </div>
              <div className="delete">
                <MdDelete onClick={() => dispatch(deleteFromCart(item))} />
              </div>
            </div>
          ))}
        </Col>
        <Col md={5} lg={5} sm={12} xs={12} data-aos="fade-left">
          <div className="form__row card__total">
            <h5>Booking Amounts</h5>
            <div className="total__cost">
              <div className="total__price">
                <p>Total Bookings : </p>
                <p> {totalProduct} </p>
              </div>
              <div className="total__price">
                <p>Product Price : </p>
                <p> $ {subTotal} </p>
              </div>
              <div className="total__price">
                <p>Vat : </p>
                <p>
                  {vat}
                  <span style={{ fontSize: '14px', color: 'red' }}>
                    (tax is 10%)
                  </span>
                </p>
              </div>
              <div className="total__price total">
                <h6>Total Cost : </h6>
                <h6> $ {finalTotal}</h6>
              </div>
            </div>
            <div className="place__order">
              <Link to="/order">
                <input type="submit" value="Place Order" />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Card;
