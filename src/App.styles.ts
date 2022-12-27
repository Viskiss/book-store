import styled from 'styled-components';

export default styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  padding: 0 80px;

  @media (max-width: 834px) {
    padding: 0 15px;
  }
`;
