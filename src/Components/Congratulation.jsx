import React from 'react';
import Lottie from 'react-lottie';
import data from '../thanks.json';
const Congratulation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
  };
  return (
    <div>
      <Lottie options={defaultOptions} />{' '}
    </div>
  );
};

export default Congratulation;
