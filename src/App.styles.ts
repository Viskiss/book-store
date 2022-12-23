import styled from 'styled-components';

export default styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  .container {
    max-width: 1280px;
  }

  @media (max-width: 834px) {
    .container {
      max-width: 804px;
    } 
  }
`;
