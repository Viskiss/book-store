import styled from 'styled-components';

export default styled.div<{ view?: boolean; typeSelector?: boolean}>`
  position: relative;
  background: ${(props) => props.theme.color.background.light};
  height: 48px;
  border-radius: ${(props) => props.theme.border.radius.main};

  .select-box {
    padding: 10px 35px 10px 15px;
    min-width: 146px;
    cursor: pointer;
    font-size: ${(props) => props.theme.font.size.m};
    line-height: ${(props) => props.theme.font.lineHeight.sm};
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
    border-radius: ${(props) => props.theme.border.radius.main};
    background: ${(props) => props.theme.color.background.light};
    font-size: ${(props) => props.theme.font.size.sm};
    line-height: ${(props) => props.theme.font.lineHeight.sm};
    margin-top: 20px;
  }

  .select-box__items::-webkit-scrollbar {
  width: 10px;
  background: ${(props) => props.theme.color.background.light};
  border-radius: ${(props) => props.theme.border.radius.main};
}

.select-box__items::-webkit-scrollbar-thumb  {
  background: ${(props) => props.theme.color.text.main};
}

  .select-box__items-price {
    display: ${(props) => (props.view ? 'flex' : 'none')};
    position: absolute;
    z-index: 1001;
    flex-direction: column;
    width: 413px;
    height: 151px;
    border-radius: ${(props) => props.theme.border.radius.main};
    background: ${(props) => props.theme.color.background.light};
    margin-top: 20px;
  }

  .select-box__item {
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.font.size.sm};
    line-height: ${(props) => props.theme.font.lineHeight.sm};
    color: ${(props) => props.theme.color.text.main};
    background: ${(props) => props.theme.color.background.light};
  }

  .select-box__title {
    color: ${(props) => props.theme.color.text.main};
  }

  .select-box__text {
    margin: ${(props) => (props.typeSelector ? '6px 0 6px 15px' : '0')};
    color: ${(props) => props.theme.color.text.main};
  }

  .select-box__text-disabled {
    color: ${(props) => props.theme.color.text.medium};
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
    font-size: ${(props) => props.theme.font.size.sm};
    line-height: ${(props) => props.theme.font.lineHeight.l};
    letter-spacing: 0.75px;
    color: ${(props) => props.theme.color.text.main};
  }

  .example-thumb {
    position: absolute;
    top: 0;
    height: 32px;
    width: 32px;
    color: ${(props) => props.theme.color.text.medium};
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
    background: ${(props) => props.theme.color.info.light};
  }
  .example-track-0 {
    background: ${(props) => props.theme.border.color.light};
  }
  .example-track-2 {
    background: ${(props) => props.theme.border.color.light};
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
