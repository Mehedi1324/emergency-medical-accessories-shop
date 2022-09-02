import React from 'react';
import '../HeaderFooter/Header.scss';
import { Offcanvas } from 'react-bootstrap';
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaMinus,
  FaPinterestP,
  FaPlus,
  FaShoppingCart,
  FaSignOutAlt,
  FaTwitter,
  FaUser,
} from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../SIgn In/Login';
import Register from '../SIgn In/Register';
import { useAuth } from '../Hooks/AuthProvider';
import { MdDelete } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../../actions/cartAction';
import Rating from '../../Components/Rating';
// framer motion

const Header = () => {
  const [isHover, toggleHover] = React.useState(false);
  // Getting product from redux

  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const subTotal = cartItems.reduce(
    (x, item) => x + item.price * item.quantity,
    0
  );
  // __________
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.1,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };
  const { handleLogout, user } = useAuth();
  const [navbar, setNavbar] = useState(false);
  const stickyNav = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', stickyNav);

  // sidebar function___________________
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // _____________

  return (
    <div className="w-100 header">
      {/*_______________ Navbar_________________ */}
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="nav__logo">
          <Link to="/">
            <img src="./images/m-kit.png" alt="logo" />
          </Link>
        </div>

        <div className="nav__logo ">
          <div className="social__icons d-flex ">
            <FaTwitter />
            <FaFacebookF />
            <FaGooglePlusG />
            <FaInstagram />
            <FaPinterestP />
          </div>
        </div>

        {/* ________Dropdown menu section __________*/}

        <div className="d-flex">
          <motion.div
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}
            className="drop__container"
          >
            <FaUser className="log__icon user__icon mx-3" />
            <motion.div
              initial="exit"
              animate={isHover ? 'enter' : 'exit'}
              variants={subMenuAnimate}
              className="drop__content"
            >
              {user.email ? (
                <div className="profile" style={{ textAlign: 'center' }}>
                  <img className="dp" src={user.photoURL} alt="dp" />
                  <p style={{ color: 'blue' }}>{user.displayName}</p>
                </div>
              ) : (
                <div className="profile" style={{ textAlign: 'center' }}>
                  <img className="dp" src="./images/dp.png" alt="" />
                  <p style={{ color: 'red' }}>Please Sign In</p>
                </div>
              )}
              <div className="links">
                <ul className="nav__list">
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>

                  <li>
                    <a href="/order">Order Now</a>
                  </li>

                  <li>
                    <Register />
                  </li>

                  <li>
                    {!user.email ? (
                      <Login />
                    ) : (
                      <span className="sign__out" onClick={handleLogout}>
                        Sign Out <FaSignOutAlt />
                      </span>
                    )}
                  </li>

                  {/* ________ */}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/*______________ Bootstrap sidebar____________ */}
          <>
            <FaShoppingCart onClick={handleShow} className="log__icon" />
            <Offcanvas
              className="sidebar"
              show={show}
              onHide={handleClose}
              placement="end"
            >
              <div>
                <Offcanvas.Header>
                  <Offcanvas.Title>
                    <div className="mini__btn">
                      <div className="total">
                        <h2>Total: </h2>
                        <h2>{subTotal} </h2>
                      </div>
                      <a href="/card">
                        <input type="submit" value="View Cart" />
                      </a>
                      <a href="/order">
                        <input type="submit" value="Order Now" />
                      </a>
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="canvas">
                  {cartItems.map((item) => (
                    <div>
                      <div className="mini__cart">
                        <div className="minicart__info">
                          <div>
                            <img src={item.image} alt="" />
                          </div>

                          <div className="cart__name">
                            <h6>{item.name}</h6>
                            <div className="rating">
                              <Rating item={item} key={item.name} />
                            </div>
                            <p>$ {item.price * item.quantity}</p>
                          </div>
                        </div>

                        <div className="quantity">
                          <FaMinus
                            onClick={() =>
                              dispatch(addToCart(item, item.quantity - 1))
                            }
                          />
                          <span style={{ margin: '5px' }}>{item.quantity}</span>
                          <FaPlus
                            onClick={() =>
                              dispatch(addToCart(item, item.quantity + 1))
                            }
                          />
                        </div>
                        <div className="delete">
                          <MdDelete
                            onClick={() => dispatch(deleteFromCart(item))}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Offcanvas.Body>
              </div>
            </Offcanvas>
          </>

          {/* __________________ */}

          <p className="cart__lnt me-1"> {cartItems.length}</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
