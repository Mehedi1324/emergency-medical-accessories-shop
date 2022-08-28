import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylings/Advertising.scss';
const Advertising = () => {
  return (
    <div className="container add" data-aos="fade-left" data-aos-delay="200">
      <div className="add__details">
        <h2>15% Off on Hand Sanitizers</h2>
        <p className="my-4">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum.
        </p>
        <Link to="/">
          <button>Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Advertising;
