import React from 'react';

import Navbar from '../../components/Navbar';
import Profile from '../../components/Profile';

import { SectionContainer } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <SectionContainer>
        <Profile />
      </SectionContainer>
    </>
  );
};

export default Home;
