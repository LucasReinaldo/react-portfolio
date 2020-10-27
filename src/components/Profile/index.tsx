import React from 'react';

import {
  Container,
  TopContainer,
  ImgContainer,
  BackContainer,
  ProfileContainer,
  Presentation,
  PresentationName,
  QuoteContainer,
  QuoteText,
  Quote,
} from './styles';

import Techs from '../Techs';
import Social from '../Social';

import imageSrc from '../../assets/IMG_2944-Edit.JPG';
import imageBack from '../../assets/Rectangle.svg';

const Profile: React.FC = () => {
  return (
    <Container>
      <TopContainer>
        <ImgContainer>
          <img src={imageSrc} alt="Lucas Reinaldo" />
        </ImgContainer>
        <BackContainer>
          <img src={imageBack} alt="Back" />
        </BackContainer>
      </TopContainer>
      <ProfileContainer>
        <Presentation>
          Hi there,
          <PresentationName>I'm Lucas Reinaldo,</PresentationName>a software
          Developer based in Dublin/IE.
        </Presentation>
        <Techs />
        <QuoteContainer>
          <QuoteText>
            <Quote>”</Quote>The difference between ordinary and extraordinary is
            that little extra.
          </QuoteText>
        </QuoteContainer>
        <Social />
      </ProfileContainer>
    </Container>
  );
};

export default Profile;
