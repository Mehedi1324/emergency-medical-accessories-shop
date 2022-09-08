import React from 'react';
import { FaArrowLeft, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import useFirebase from '../Firebase/useFirebase';

const RegisterPage = () => {
  const {
    fNameRef,
    lNameRef,
    emailRef,
    passwordRef,
    repasswordRef,
    error,
    handleSignUp,
    handleGoogleSignIn,
    handleFacebookSignIn,
  } = useFirebase();
  return (
    <div className="register__form">
      <div className="inside__form">
        <div className="form">
          <div className="regitel">
            <h2>Register Now :</h2>
          </div>
          <form onSubmit={handleSignUp}>
            <div className="name__inp">
              <div>
                <p className="inp__title">
                  First Name <span style={{ color: 'red' }}>*</span>
                </p>
                <input type="text" ref={fNameRef} required />
              </div>
              <div>
                <p className="inp__title">
                  Last Name <span style={{ color: 'red' }}>*</span>
                </p>
                <input type="text" ref={lNameRef} required />
              </div>
            </div>
            <p className="inp__title">
              Email <span style={{ color: 'red' }}>*</span>
            </p>

            <input type="email" required ref={emailRef} />
            <br />

            <p className="inp__title">
              Password <span style={{ color: 'red' }}>*</span>
            </p>

            <input type="password" ref={passwordRef} required />
            <p className="inp__title">
              Confirm Password <span style={{ color: 'red' }}>*</span>
            </p>

            <input type="password" ref={repasswordRef} required />
            <br />
            <p style={{ color: 'red' }}> {error}</p>
            <div className="d-flex">
              <input
                className="regi__btn"
                type="submit"
                value="Create an Account"
              />
            </div>
          </form>
          <div className="social__auth text-center">
            <h4 className="my-3">______ OR _____</h4>
            <div className="s__btn mt-5">
              <button onClick={handleGoogleSignIn}>
                Sign In With Google | <FcGoogle />
              </button>
              <button
                onClick={handleFacebookSignIn}
                className="bg-primary text-white"
              >
                Sign In With Facebook | <FaFacebookF />
              </button>
            </div>
          </div>
          <Link to="/login">
            {' '}
            <button className="btn my-3">
              <FaArrowLeft /> Back to login{' '}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
