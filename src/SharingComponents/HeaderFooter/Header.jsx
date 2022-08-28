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
// framer motion

const Header = () => {
  const [isHover, toggleHover] = React.useState(false);
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
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    style={{
                      margin: 'auto',
                      borderBottom: '2px solid gray',
                    }}
                  >
                    {' '}
                    <h3
                      style={{
                        fontWeight: '700',
                        marginTop: '10px',
                        color: '#29005f',
                      }}
                    >
                      {' '}
                      Mini Card{' '}
                    </h3>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
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
                  <div className="mini__total">
                    <h3>Total :</h3>
                    <h3>$ 100</h3>
                  </div>
                  <div className="mini__btn">
                    <a href="/card">
                      <input type="button" value="View Card" />
                    </a>
                    <a href="/order">
                      <input type="button" value="Order Now" />
                    </a>
                  </div>
                </Offcanvas.Body>
              </div>
            </Offcanvas>
          </>

          {/* __________________ */}

          <p className="cart__lnt me-3"> 10</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
