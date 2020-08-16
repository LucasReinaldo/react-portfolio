import React from 'react';

import Navbar from '../../components/Navbar';
import Profile from '../../components/Profile';
import About from '../../components/About';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
    </>
  );
};

export default Home;
