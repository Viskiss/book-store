import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;

  .recommend-books__items {
    display: flex;
    gap: 20px;

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
`;
