import styled from 'styled-components';

export default styled.div<{ drop: boolean }>`
  position: relative;
  background: ${(props) => props.theme.color.white};
  height: 40px;
  border-radius: 16px;

  .select-box__items {
    display: ${(props) => (props.drop ? 'flex' : 'none')};
    position: absolute;
    z-index: 1001;
    flex-direction: column;
    width: 413px;
    height: 151px;
    border-radius: ${(props) => props.theme.border.default};
    background: ${(props) => props.theme.color.white};
    margin-top: 20px;
  }

  .select-box__polygon {
    display: ${(props) => (props.drop ? 'block' : 'none')};
    position: absolute;
    top: 55px;
  }

  .select-box__arrow {
    transform: ${(props) => (props.drop ? 'rotate(90deg)' : '')};
  }

  .select-box__slider {
    margin-top: 50px;
    margin-left: 18px;
    padding: 10px 15px;
    top: 0;
    width: 349px;
    text-align: start;
    z-index: 1;
  }

  .price {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh34};
    letter-spacing: 0.75px;
    color: ${(props) => props.theme.color.blue};
  }

  .example-thumb {
    position: absolute;
    top: 0;
    height: 32px;
    width: 32px;
    color: ${(props) => props.theme.color.white};
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

  @media (max-width: 500px) {
    margin-bottom: 10px;
    width: 100%;

    .select-box__items {
      width: 100%;
    }
  }
`;
