import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  .books-catalog__items {
    display: flex;
    gap: 60px 20px;
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
    margin-bottom: 23px;
    display: flex;
    width: calc((100% - (20 * 3)) / 4);
  }

  @media (max-width: 834px) {
    .books-catalog__items {
    gap: 30px 20px;
  }
  }
`;
