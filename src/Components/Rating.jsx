import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
const Rating = (props) => {
  const { rating } = props.item;

  return (
    <div style={{ color: 'gold' }}>
      {rating > 0 ? <FaStar /> : <FaRegStar />}
      {rating > 1 ? <FaStar /> : <FaRegStar />}
      {rating > 2 ? <FaStar /> : <FaRegStar />}
      {rating > 3 ? <FaStar /> : <FaRegStar />}
      {rating > 4 ? <FaStar /> : <FaRegStar />}
    </div>
  );
};

export default Rating;
