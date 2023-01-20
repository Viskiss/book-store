import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;

  .books-catalog__items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .title-catalog {
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
    margin: 0;
  }

  /* .filter-books {
    margin-bottom: 50px;
  } */
`;
