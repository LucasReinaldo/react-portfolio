import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.8rem auto;
`;

export const TechsContainer = styled.div`
  display: flex;
  flex-direction: row;

  span {
    border: 1px solid #eee;
    margin: 0 1.6rem;
    height: 66%;
    align-self: center;
  }
`;

export const Tech = styled.p`
  font-size: 2rem;
`;
