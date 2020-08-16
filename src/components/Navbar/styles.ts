import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  background-color: #03060b;
  display: flex;
  height: 70px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  font-size: 18px;

  div {
    color: #ffffff;
  }

  nav {
    ul {
      display: flex;

      li {
        list-style: none;

        a {
          text-decoration: none;
          color: white;
          text-transform: uppercase;
          padding: 1.8rem;
          transition: all 100ms linear 0s;

          &:hover {
            background: rgba(255, 255, 255, 0.15);
          }
        }

        svg {
          display: flex;
        }
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  max-width: 1080px;

  margin: auto;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 6em;
`;
