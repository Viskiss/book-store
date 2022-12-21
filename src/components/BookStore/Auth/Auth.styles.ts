import styled from 'styled-components';

export default styled.section`
  background: #f0f4ef;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #f0f4ef;
  display: flex;
  border-radius: 16px;
  margin: 100px 0 150px 0;

  .auth_container {
    width: 1280px;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;

    img:nth-child(2) {
      right: 0;
    }

    .auth {
      padding: 0 130px 90px 20px;
    }

    .auth-text {
      width: 415px;
    }
  }

  .castle-block {
    position: relative;
  }

  .img_castle {
    padding: 0 108px;
    position: absolute;
    bottom: 0;
  }
`;
