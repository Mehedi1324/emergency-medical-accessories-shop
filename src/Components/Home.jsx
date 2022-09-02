import React from 'react';
import Advertising from './Advertising';
import Banner from './Banner';
import Blogs from './Blogs';
import FeatureProducts from './FeatureProducts';
import InstagramCollections from './InstagramCollections';
import NewArrivals from './NewArrivals';
import Supports from './Supports';
import Walker from './Walker';

const Home = () => {
  return (
    <div>
      <Banner />
      <Walker />
      <NewArrivals />
      <Advertising />
      <FeatureProducts />
      <Blogs />
      {/* <InstagramCollections /> */}
      <Supports />
    </div>
  );
};

export default Home;
