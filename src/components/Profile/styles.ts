import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 140px 0 20px 0;
`;

export const ImgContainer = styled.div`
  img {
    width: 320px;
    border-radius: 5px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
`;

export const Presentation = styled.div`
  line-height: 50px;
  font-size: 20px;
`;

export const PresentationName = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const QuoteContainer = styled.div`
  margin-left: auto;
  font-size: 12px;
  margin-bottom: 20px;
  width: 60%;
`;

export const QuoteText = styled.div`
  font-size: 12px;
`;

export const Quote = styled.span`
  font-size: 32px;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 120px;
  gap: 8px;
`;
