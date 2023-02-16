import styled from 'styled-components';

export default styled.div<{ view?: boolean; typeSelector?: boolean }>`
  position: relative;
  background: ${(props) => props.theme.color.white};
  height: 48px;
  border-radius: ${(props) => props.theme.border.default};

  .select-box {
    padding: 10px 35px 10px 15px;
    min-width: 146px;
    cursor: pointer;
    font-size: ${(props) => props.theme.fontSize.fs18};
    line-height: ${(props) => props.theme.lineHeight.lh28};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .select-box__arrow {
    position: absolute;
    right: 20px;
    top: 17px;
    transform: ${(props) => (props.view ? 'rotate(90deg)' : '')};
  }

  .select-box__items {
    display: ${(props) => (props.view ? 'block' : 'none')};
    width: ${(props) => (props.typeSelector ? '197px' : '305px')};
    height: ${(props) => (props.typeSelector ? '226px' : '400px')};
    overflow: auto;
    position: absolute;
    z-index: 1001;
    border-radius: ${(props) => props.theme.border.default};
    background: ${(props) => props.theme.color.white};
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh28};
    margin-top: 20px;
  }

  .select-box__items-price {
    display: ${(props) => (props.view ? 'flex' : 'none')};
    position: absolute;
    z-index: 1001;
    flex-direction: column;
    width: 413px;
    height: 151px;
    border-radius: ${(props) => props.theme.border.default};
    background: ${(props) => props.theme.color.white};
    margin-top: 20px;
  }

  .select-box__item {
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh28};
    color: ${(props) => props.theme.color.blue};
    background: ${(props) => props.theme.color.white};
  }

  .select-box__text {
    margin: ${(props) => (props.typeSelector ? '6px 0 6px 15px' : '0')};
    color: ${(props) => props.theme.color.blue};
  }

  .select-box__text-disabled {
    color: ${(props) => props.theme.color.grey};
    margin: ${(props) => (props.typeSelector ? '6px 0 6px 15px' : '0')};
  }

  .select-box__img {
    padding: 7px 10px 7px 15px;
  }
  .select-box__polygon {
    display: ${(props) => (props.view ? 'block' : 'none')};
    position: absolute;
    top: 55px;
  }

  .select-box__slider {
    margin-top: 50px;
    margin-left: 18px;
    padding: 10px 15px;
    top: 0;
    width: 80%;
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

  @media (max-width: 950px) {
    width: 33%;

    .select-box__items-price {
      width: 290px;
    }

    .select-box__items {
      width: ${(props) => (props.typeSelector ? '100%' : '290px')};
    }

    .select-box__items {
      padding-top: 17px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;

    .select-box__items {
      width: 100%;
    }

    .select-box__items-price {
      width: 100%;
    }

    .select-box__slider {
      width: 87%;
    }

    .select-box__arrow {
      right: 20px;
    }
  }
`;
