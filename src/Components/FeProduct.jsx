import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartAction';
import '../Stylings/Product.scss';
const FeProduct = (props) => {
  const { name, image, price } = props.product;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(props.product, quantity));
  };
  return (
    <Col md={4} lg={3} sm={6} xs={6}>
      <div className="product__container">
        <img className="pro__img" src={image} alt="img" />
        <div className="product__content">
          <div className="hidden__btn">
            <Link to={`/product/${props.product._id}`}>
              <button className="hov__icon">View Product</button>
            </Link>

            <button onClick={handleAddToCart} className="hov__icon">
              Add to card
            </button>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/product/${props.product._id}`}>{name}</Link>
        <p>$ {price}</p>
      </div>
    </Col>
  );
};

export default FeProduct;
