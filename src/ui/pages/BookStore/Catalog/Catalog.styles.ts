import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;

  .books-catalog__items {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .title-catalog {
    font-size: ${(props) => props.theme.fontSize.fs40};
    line-height: ${(props) => props.theme.lineHeight.lh60};
    color: ${(props) => props.theme.color.dark};
    margin: 0;
  }

  .books-catalog {
    margin-bottom: 80px;
  }
`;
