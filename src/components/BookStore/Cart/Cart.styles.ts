import styled from 'styled-components';

export default styled.section`

  .cart_container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 150px;
  }

  .img_book {
    height: 261px;
  }

  @media (max-width: 834px) {
    .invite_container {
    width: 804px;
    position: relative;
  }

  .img_girl {
    padding: 0 14px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  
  }
`;
