import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;

  .books-catalog__items {
    display: flex;
  gap: 20px;
    flex-wrap: wrap;
  }

  .title-catalog {
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
    margin: 0;
  }

  .books-catalog {
    margin-bottom: 80px;
  }
`;
