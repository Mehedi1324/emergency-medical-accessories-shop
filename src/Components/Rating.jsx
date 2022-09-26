import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
const Rating = ({ item }) => {
  const rating = item.rate;
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
