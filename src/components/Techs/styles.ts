import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.8em auto;
`;

export const TechsContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 650px) {
    flex-direction: row;
  }

  span {
    border: 1px solid #eee;
    margin: 0 1.6em;
    height: 66%;
    align-self: center;
  }
`;

export const Tech = styled.p`
  font-size: 2.8rem;
  font-weight: 500;

  @media (max-width: 520px) {
    font-size: 16px;
  }
`;
