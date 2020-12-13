import styled from 'styled-components';

export const Container = styled.main`
  margin: 6rem auto;

  > div {
    display: flex;
    margin: auto;

    @media (max-width: 650px) {
      display: flex;
      flex-direction: column;
      margin: 0.8rem;
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SquareImage = styled.img`
  width: 42rem;
  height: 58rem;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const RoundImage = styled.img`
  display: none;
  flex-shrink: 0;

  @media (max-width: 650px) {
    display: flex;
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    flex-shrink: 0;
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
  line-height: 4.4rem;
  font-size: 2.4rem;
  margin: 3.2rem auto;

  @media (max-width: 650px) {
    font-size: 16px;
    text-align: center;
    line-height: 3.6rem;
  }
`;

export const PresentationName = styled.span`
  font-size: 4.8rem;
  font-weight: 600;

  @media (max-width: 650px) {
    font-size: 24px;
  }
`;

export const QuoteContainer = styled.div`
  margin: 0 auto;
  width: max(40%, 80%);
`;

export const QuoteText = styled.div`
  font-size: 13px;
  text-align: center;

  @media (max-width: 650px) {
    font-size: 11px;
  }
`;

export const Quote = styled.span`
  font-size: 6rem;
`;
