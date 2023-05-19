import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import '../Stylings/SingleItem.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Advertising from './Advertising';
import Supports from './Supports';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartAction';
const SingleItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const url = `https://medi-kit.onrender.com/product/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setProduct(data));

  const handleAddToCart = () => {
    dispatch(addToCart(product, quantity));
  };
  const dispatch = useDispatch();
  return (
    <div className="single__container">
      <div className="single__item">
        <Row>
          <Col md={6} sm={12} lg={6} xs={12}>
            <div className="product__img">
              <img src={product.image} alt="Product img" />
            </div>
          </Col>
          <Col md={6} sm={12} lg={6} xs={12} className="col__det">
            <div className="rating">
              <p style={{ display: 'flex' }}>
                {Array(product.rate)
                  .fill()
                  .map(() => (
                    <p>⭐</p>
                  ))}
              </p>
            </div>
            <h4>{product.name}</h4>
            <h3>$ {product.price}</h3>
            <p>Color:</p>
            <span className="radio__btn">
              <div className="radio">
                <input className="r1" type="radio" name="radio" />
                <p>red</p>
              </div>
              <div className="radio">
                <input className="r2" type="radio" name="radio" />
                <p>black</p>
              </div>
              <div className="radio">
                <input className="r3" type="radio" name="radio" />
                <p>blue</p>
              </div>
            </span>
            <div className="quantity">
              <p>Total Product :</p>
              <p> {quantity}</p>
            </div>

            <div className="quantity">
              <FaMinus
                onClick={() =>
                  dispatch(
                    addToCart(
                      product,
                      setQuantity(quantity > 1 && quantity - 1)
                    )
                  )
                }
              />
              <p className="p-2"> {quantity} </p>
              <FaPlus
                onClick={() =>
                  dispatch(addToCart(product, setQuantity(quantity + 1)))
                }
              />
            </div>
            <div className="card__btn">
              <input
                onClick={handleAddToCart}
                type="submit"
                value="Add to cart"
              />
              <Link to="/order">
                <input type="submit" value="Check Order" />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      <Advertising />
      <Supports />
    </div>
  );
};

export default SingleItem;
