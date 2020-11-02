import React from 'react';

import {
  IoIosCode,
  IoIosMail,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';

import { Container } from './styles';

const Social: React.FC = () => {
  return (
    <Container>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/lucas-reinaldo-de-melo/"
        aria-label="LinkedIn LucasReinaldo"
      >
        <IoLogoLinkedin />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/LucasReinaldo"
        aria-label="Github LucasReinaldo"
      >
        <IoLogoGithub />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wakatime.com/@LucasReinaldoMelo"
        aria-label="LinkedIn LucasReinaldo"
      >
        <IoIosCode />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/lreinaldodemelo/"
        aria-label="LinkedIn LucasReinaldo"
      >
        <IoLogoInstagram />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:lucasreinaldo.demelo@hotmail.com?cc:l.reinaldodemelo@gmail.com"
      >
        <IoIosMail />
      </a>
    </Container>
  );
};

export default Social;
