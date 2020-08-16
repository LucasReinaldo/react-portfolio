import React from 'react';

import {
  IoIosCode,
  IoIosMail,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';

import {
  Container,
  ImgContainer,
  ProfileContainer,
  Presentation,
  PresentationName,
  QuoteContainer,
  QuoteText,
  Quote,
  SocialContainer,
} from './styles';

const imageSrc = require('../../assets/profile.JPG');

const Profile: React.FC = () => {
  return (
    <>
      <Container>
        <ImgContainer>
          <img src={imageSrc} alt="Lucas Reinaldo" />
        </ImgContainer>
        <ProfileContainer>
          <Presentation>
            Hi there,
            <PresentationName>I'm Lucas Reinaldo,</PresentationName>a software
            Developer based in Dublin/IE.
          </Presentation>
          <QuoteContainer>
            <QuoteText>
              <Quote>”</Quote>The difference between ordinary and extraordinary
              is that little extra.
            </QuoteText>
          </QuoteContainer>
          <SocialContainer>
            <IoLogoLinkedin size={42} />
            <IoLogoGithub size={42} />
            <IoIosCode size={42} />
            <IoLogoInstagram size={42} />
            <IoIosMail size={42} />
          </SocialContainer>
        </ProfileContainer>
      </Container>
    </>
  );
};

export default Profile;
