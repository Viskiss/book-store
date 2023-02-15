import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1280px;

  @media (max-width: 575px) {
    align-items: center;
  }
`;
