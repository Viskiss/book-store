import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  .filters__title {
    font-size: ${(props) => props.theme.fontSize.fs40};
    line-height: ${(props) => props.theme.lineHeight.lh60};
    margin: 0;
  }

  .filters__book-filter {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  @media (max-width: 950px) {
    flex-direction: column;
  }

  @media (max-width: 650px) {
    .filters__book-filter {
      gap: 10px;
    }
  }

  @media (max-width: 500px) {
    .filters__book-filter {
      flex-direction: column;
    }
  }
`;
