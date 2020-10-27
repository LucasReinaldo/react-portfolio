import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosMoon } from 'react-icons/io';

import { Container, Header, Title } from './styles';

const Navbar: React.FC = () => {
  return (
    <Header>
      <Container>
        <Title>LUCAS REINALDO</Title>
        <nav>
          <ul>
            <li>
              <Link to="#cv">CV</Link>
            </li>
            <IoIosMoon size={28} />
          </ul>
        </nav>
      </Container>
    </Header>
  );
};

export default Navbar;
