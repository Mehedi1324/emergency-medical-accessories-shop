import React from 'react';
import { Col } from 'react-bootstrap';
import { FaSearchPlus, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AddingProduct from '../SharingComponents/Cart/AddingProduct';
import '../Stylings/Product.scss';
const NProduct = (props) => {
  const { image, price, name } = props.product;
  const { handleAddtoCart } = AddingProduct();

  return (
    <Col md={4} lg={3} sm={6} xs={6}>
      <div className="product__container">
        <img className="pro__img" src={image} alt="img" />
        <div className="product__content">
          <div className="hidden__btn">
            <Link to={`/product/${props.product._id}`}>
              <button className="hov__icon">View Product</button>
            </Link>

            <button
              onClick={() => handleAddtoCart(props.product)}
              className="hov__icon"
            >
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

export default NProduct;
