import styled from 'styled-components';

export default styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    max-width: 1280px;
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 804px;
    } 
  }

  @media (max-width: 768px) {
    .container {
      max-width: 700px;
    }
  }

  @media (max-width: 425px) {
    .container {
      max-width: 290px;
    }
  }

`;
