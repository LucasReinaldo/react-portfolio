import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  background-color: #03060b;
  display: flex;
  height: 7rem;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  font-size: 1.8rem;
  color: #ffffff;

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
          font-weight: 500;

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

  max-width: 114rem;

  margin: auto;

  @media (max-width: 1140px) {
    width: 100%;
    margin: 0.8rem;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 6rem;
`;
