import React from 'react';

import {
  Container,
  ImgContainer,
  ImgRoundedContainer,
  ProfileContainer,
  Presentation,
  PresentationName,
  QuoteContainer,
  QuoteText,
  Quote,
} from './styles';

import Techs from '../Techs';
import Social from '../Social';

import imageSrc from '../../assets/main.png';
import imageRoundedSrc from '../../assets/rounded.png';

const Profile: React.FC = () => {
  return (
    <Container>
      <div>
        <ImgContainer>
          <img src={imageSrc} alt="Lucas Reinaldo" />
        </ImgContainer>

        <ProfileContainer>
          <Presentation>
            Hi there,
            <PresentationName>I'm Lucas Reinaldo,</PresentationName>a software
            Developer based in Dublin/IE.
          </Presentation>

          <Techs />

          <QuoteContainer>
            <QuoteText>
              <Quote>”</Quote>The difference between ordinary and extraordinary
              is that little extra.
            </QuoteText>
          </QuoteContainer>

          <Social />
        </ProfileContainer>
        <ImgRoundedContainer>
          <img src={imageRoundedSrc} alt="Lucas Reinaldo" />
        </ImgRoundedContainer>
      </div>
    </Container>
  );
};

export default Profile;
