import React from 'react';

import lineBar from '../../assets/line.svg';

import {
  Container,
  ImgContainer,
  Title,
  Description,
  Paragraph,
} from './style';

const About: React.FC = () => {
  return (
    <Container>
      <ImgContainer>
        <img src={lineBar} alt="line" />
      </ImgContainer>
      <Title>ABOUT</Title>
      <Description>
        <Paragraph>
          I am a Bilingual professional (Portuguese & English). I relocated to
          Ireland in 2018 in order to expand my understanding of business,
          improve my skills in English, and develop international exposure.
        </Paragraph>
        <Paragraph>
          My stack is based in JavaScript, TypeScript, NodeJS, ReactJS and React
          Native.
        </Paragraph>
        <Paragraph> I also make a great barista coffee!</Paragraph>
      </Description>
    </Container>
  );
};

export default About;
