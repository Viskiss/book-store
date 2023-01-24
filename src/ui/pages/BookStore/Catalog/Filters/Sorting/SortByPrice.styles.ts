import styled from 'styled-components';

export default styled.div<{ drop: boolean }>`
  position: relative;
  background: #F0F4EF;
  height: 40px;
  border-radius: 16px;

  .select-box--items {
    display: ${(props) => (props.drop ? 'flex' : 'none')};
    position: absolute;
    z-index: 1000;
    flex-direction: column;
    width: 413px;
    height: 151px;
    border-radius: 16px;
    background: #f0f4ef;
  }
  .select-box--item {
    border-radius: 16px;
    font-size: 16px;
    line-height: 28px;
    color: #344966;
    background: #f0f4ef;
  }

  .select-box--arrow {
    transform: ${(props) => (props.drop ? 'rotate(90deg)' : '')};
  }

  .select-box--slider {
    margin-top: 50px;
    margin-left: 18px;
    padding: 10px 15px;
    top: 0;
    width: 349px;
    text-align: start;
    z-index: 1;
  }

  .polygon {
    position: absolute;
    top: -13px;
    left: 15px;
  }
  .price {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    font-size: 16px;
    line-height: 34px;
    letter-spacing: 0.75px;
    color: #344966;
  }

  .example-thumb {
    position: absolute;
    top: 0;
    height: 32px;
    width: 32px;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
    font-size: 0;
    background-color: white;
    border: solid 2px #bfcc94;
    :focus {
      outline: none;
    }
  }

  .example-track {
    top: 8px;
    height: 12px;
    border-radius: 40px;
  }
  .example-track-1 {
    background: #bfcc94;
  }
  .example-track-0 {
    background: #d6d8e7;
  }
  .example-track-2 {
    background: #d6d8e7;
  }
`;
