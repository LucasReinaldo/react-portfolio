import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8rem;
  margin-top: 10rem;
  justify-content: center;

  @media (max-width: 830px) {
    margin: 10rem 1.6rem;
    width: 100%;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  width: 40rem;
  height: 50rem;
  position: relative;

  @media (max-width: 830px) {
    display: none;
  }
`;

export const BackContainer = styled.div`
  display: flex;
  position: absolute;

  img {
    width: 40rem;
    margin-left: 6rem;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  position: absolute;

  img {
    z-index: 2;
    margin-top: 4rem;
    width: 42rem;
  }
`;

export const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
`;

export const Presentation = styled.div`
  line-height: 4.8rem;
  font-size: 2.2rem;
`;

export const PresentationName = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;

export const QuoteContainer = styled.div`
  margin: 0 auto;
  font-size: 1.2rem;
  width: 80%;

  @media (min-width: 830px) {
    font-size: 1.2rem;
    width: 50%;
  }
`;

export const QuoteText = styled.div`
  font-size: 1.2rem;
`;

export const Quote = styled.span`
  font-size: 3.2rem;
`;
