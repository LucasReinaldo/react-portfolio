import React from 'react';

import { Container, TechsContainer, Tech } from './styles';

const Techs: React.FC = () => {
  return (
    <Container>
      <TechsContainer>
        <Tech>JavaScript</Tech>
        <span />
        <Tech>TypeScript</Tech>
      </TechsContainer>
      <TechsContainer>
        <Tech>NodeJS</Tech>
        <span />
        <Tech>ReactJS</Tech>
        <span />
        <Tech>ReactNative</Tech>
      </TechsContainer>
    </Container>
  );
};

export default Techs;
