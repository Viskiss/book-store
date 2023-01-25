import styled from 'styled-components';

export default styled.div<{ drop?: boolean; typeSelect?: boolean }>`
  position: relative;
  background: #f0f4ef;
  height: 48px;
  border-radius: 16px;
  
  .select-box {
    padding: 10px 35px 10px 15px;
    min-width: 146px;
    cursor: pointer;
    font-size: 18px;
    line-height: 28px;
  }

  .select-box__arrow {
    position: absolute;
    right: 20px;
    top: 17px;
    transform: ${(props) => (props.drop ? 'rotate(90deg)' : '')};
  }

  .select-box__items {
    display: ${(props) => (props.drop ? 'block' : 'none')};
    width: ${(props) => (props.typeSelect ? '197px' : '305px')};
    height: ${(props) => (props.typeSelect ? '226px' : '400px')};
    overflow: auto;
    position: absolute;
    z-index: 1000;
    border-radius: 16px;
    background: #f0f4ef;
    font-size: 16px;
    line-height: 28px;
    margin-top: 20px;
  }

  .select-box__item {
    display: flex;
    align-items: center;
    :nth-child(1) {
      border-radius: 16px;
    }
    :nth-child(19) {
      border-radius: 16px;
    }
    font-size: 16px;
    line-height: 28px;
    color: #344966;
    background: #f0f4ef;
  }

  .select-box__text {
    margin: ${(props) => (props.typeSelect ? '6px 0 6px 15px' : '0')};
  }

  .select-box__img {
    padding: 14px 10px 7px 15px;
  }

  .select-box__polygon {
    display: ${(props) => (props.drop ? 'block' : 'none')};
    position: absolute;
    top: 55px;
  }

  @media (max-width: 650px) {
    .select-box {
    min-width: fit-content;
  }
  }

  @media (max-width: 500px) {
    width: 100%;
    
    .select-box__items {
      width: 100%;
    }
  }
`;
