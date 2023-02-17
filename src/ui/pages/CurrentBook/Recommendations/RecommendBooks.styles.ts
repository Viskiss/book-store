import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  .recommend-books__items {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  .recommendations__title {
    font-weight: ${(props) => props.theme.font.weight.xl};
    font-size: ${(props) => props.theme.font.size.xxxl};
    line-height: ${(props) => props.theme.font.lineHeight.xxxl};
    color: ${(props) => props.theme.color.text.dark};
  }

  @media (max-width: 930px) {
    .recommend-books__items :nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 930px) {
    margin-top: 50px;
    .recommendations__title {
      font-size: ${(props) => props.theme.font.size.xxl};
      line-height: ${(props) => props.theme.font.lineHeight.xl};
    }
  }

  @media (max-width: 575px) {
    margin-bottom: -50px;
    margin-top: 30px;
    .recommendations__title {
      font-size: ${(props) => props.theme.font.size.m};
      line-height: ${(props) => props.theme.font.lineHeight.sm};
    }

     .recommend-books__items :nth-last-child(4) {
      display: none;
    }
  }
`;
