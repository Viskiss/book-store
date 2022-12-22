import styled from 'styled-components';

export default styled.section`
  background: #f0f4ef;
  color: #f0f4ef;
  display: flex;
  border-radius: 16px;
  margin-bottom: 120px;

  .invite_container {
    width: 1280px;
    display: flex;
    justify-content: space-between;
  }

  .img_girl {
    padding: 0 98px;
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
