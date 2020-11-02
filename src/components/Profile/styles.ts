import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  margin: 1.6rem auto;
  width: 100%;

  div {
    display: flex;
    justify-content: center;

    @media (max-width: 500px) {
      margin: 0.8rem;
    }
  }
`;

export const ImgContainer = styled.div`
  justify-content: center;
  align-items: center;

  img {
    width: 42rem;
    height: 58rem;
  }

  @media (max-width: 800px) {
    display: none;

    img {
      width: 32rem;
      height: 44rem;
    }
  }

  @media (max-width: 650px) {
    display: none;
    img {
      display: none;
    }
  }
`;

export const ImgRoundedContainer = styled.div`
  display: none;
  flex-shrink: 0;

  img {
    @media (min-width: 651px) {
      display: none;
    }

    @media (max-width: 650px) {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      flex-shrink: 0;
    }
  }
`;

export const ProfileContainer = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: column;
  margin-left: 2.4rem;

  @media (max-width: 650px) {
    margin: 0;
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 4.8rem;
  font-size: 2.4rem;

  @media (max-width: 650px) {
    line-height: 3rem;
    font-size: 1.8rem;
  }
`;

export const PresentationName = styled.span`
  font-size: 4.8rem;
  font-weight: 600;

  @media (max-width: 650px) {
    font-size: 3rem;
  }
`;

export const QuoteContainer = styled.div`
  margin: 0 auto;
  width: max(40%, 80%);
`;

export const QuoteText = styled.div`
  font-size: 1.2rem;
  align-items: center;
`;

export const Quote = styled.span`
  font-size: 6rem;
`;
