import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FaAddressCard, FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../Hooks/AuthProvider';
import '../SIgn In/Register.scss';
const Register = () => {
  const {
    fNameRef,
    lNameRef,
    emailRef,
    passwordRef,
    repasswordRef,
    handleSignUp,
  } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="register">
      <p onClick={handleShow} className="loginBtn">
        {' '}
        Register <FaAddressCard />{' '}
      </p>
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton className="mHeader">
          <Modal.Title>
            {' '}
            <FaAddressCard
              style={{ fontSize: '40px', marginRight: '20px' }}
            />{' '}
            Create New Account{' '}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSignUp}>
            <div className="d-flex name__inp">
              <div>
                <input
                  type="text"
                  ref={fNameRef}
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  ref={lNameRef}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <p className="inp__title">
              Email <span style={{ color: 'red' }}>*</span>
            </p>

            <input type="email" required ref={emailRef} />
            <br />
            <div className="check">
              <input type="checkbox" />
              <p>Sign Up for Newsletter</p>
            </div>

            <p className="inp__title">
              Password <span style={{ color: 'red' }}>*</span>
            </p>

            <input type="password" ref={passwordRef} required />
            <p className="inp__title">
              Confirm Password <span style={{ color: 'red' }}>*</span>
            </p>

            <input type="password" ref={repasswordRef} required />
            <br />
            <div className="check">
              <input type="checkbox" required />
              <p>
                By using this form you agree with the storage and handling of
                your data by this website.
              </p>
            </div>
            <div className="d-flex">
              <input
                className="regi__btn"
                type="submit"
                value="Create an Account"
              />
            </div>
          </form>
          <button className="btn my-3">
            <FaArrowLeft /> Back to login{' '}
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Register;
