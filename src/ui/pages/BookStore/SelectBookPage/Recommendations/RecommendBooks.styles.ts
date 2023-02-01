import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;

  .recommend-books__items {
    display: flex;
    gap: 20px;
    justify-content: center;

    div {
      margin-bottom: 0;
    }
  }

  .recommendations__title {
    font-weight: ${(props) => props.theme.fontWeight.height};
    font-size: ${(props) => props.theme.fontSize.fs40};
    line-height: ${(props) => props.theme.lineHeight.lh60};
    color: ${(props) => props.theme.color.dark};
  }

  @media (max-width: 1300px) {
    .recommend-books__items :nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 930px) {
    margin-top: 50px;
    .recommendations__title {
      font-size: ${(props) => props.theme.fontSize.fs32};
      line-height: ${(props) => props.theme.lineHeight.lh48};
    }
  }

  @media (max-width: 825px) {
    .recommendations__title {
      font-size: ${(props) => props.theme.fontSize.fs18};
      line-height: ${(props) => props.theme.lineHeight.lh27};
    }
    .recommend-books__items :nth-child(3) {
      display: none;
    }
    .recommend-books__items :nth-child(4) {
      display: none;
    }
  }
`;
