import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  background-color: #03060b;
  display: flex;
  font-size: 1.8rem;
  height: 8rem;
  left: 0;
  right: 0;
  top: 0;

  nav {
    ul {
      display: flex;

      li {
        list-style: none;

        a {
          text-decoration: none;
          color: white;
          text-transform: uppercase;
          padding: 1.6rem;
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
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 6rem;
`;
