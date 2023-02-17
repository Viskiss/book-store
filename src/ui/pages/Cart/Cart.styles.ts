import styled from 'styled-components';

export default styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;

  .cart-container {
    display: flex;
    justify-content: center;
  }

  .cart_container__img {
    height: 261px;
  }

  .cart__books {
    display: flex;
    flex-direction: column;
  }

  .cart-button {
    border-radius: ${(props) => props.theme.border.radius.main};
    border: 1px solid ${(props) => props.theme.border.color.dark};
    color: ${(props) => props.theme.color.text.dark};
    background-color: inherit;
    margin-right: 20px;
  }

  .cart__total-title {
    font-weight: ${(props) => props.theme.font.weight.m};
    font-size: ${(props) => props.theme.font.size.xl};
    line-height: ${(props) => props.theme.font.lineHeight.xxl};
    color: ${(props) => props.theme.color.text.dark};
  }

  .cart__total {
    color: ${(props) => props.theme.color.text.dark};
    font-weight: ${(props) => props.theme.font.weight.xl};
    font-size: ${(props) => props.theme.font.size.xl};
    line-height: ${(props) => props.theme.font.lineHeight.xxl};
  }

  .item-cart__box {
    display: flex;
    justify-content: flex-start;
    margin: 20px 0 40px 0;
  }

  .item-cart__box:not(:first-child) {
    margin-top: 40px;
  }

  .item-cart__box-cover {
    margin-right: 20px;
    width: 197px;
    height: 289px;
  }

  .item-cart__cover {
    border-radius: ${(props) => props.theme.border.radius.main};
    height: 100%;
    width: 100%;
  }

  .item-cart__box-title {
    font-size: ${(props) => props.theme.font.size.xxxl};
    font-weight: ${(props) => props.theme.font.weight.xl};
    line-height: ${(props) => props.theme.font.lineHeight.xxxl};
    color: ${(props) => props.theme.color.text.dark};
    margin: 0;
    cursor: pointer;
  }

  .item-cart__box-author {
    font-size: ${(props) => props.theme.font.size.l};
    font-weight: ${(props) => props.theme.font.weight.m};
    line-height: ${(props) => props.theme.font.lineHeight.ml};
    color: ${(props) => props.theme.color.text.dark};
    margin: 0 0 50px 0;
  }

  .item-cart__box-price {
    font-size: ${(props) => props.theme.font.size.xl};
    line-height: ${(props) => props.theme.font.lineHeight.xxl};
    color: ${(props) => props.theme.color.text.dark};
    margin: 0;
  }

  .item-cart__box-button {
    border-radius: ${(props) => props.theme.border.radius.round};
    background: ${(props) => props.theme.color.bannerBd};
    padding: 8px 10px;
    border: none;
    cursor: pointer;
  }

  .box-button__dec {
    padding-bottom: 4px;
  }

  .quantity {
    margin: 15px;
  }

  .item-cart__box-filter {
    display: flex;
    margin-bottom: 50px;
  }

  .item-cart__box-trash {
    margin-left: 50px;
    cursor: pointer;
  }

  .line:not(:last-child) {
    border-bottom: ${(props) => props.theme.border.color.light};
  }

  @media (max-width: 834px) {
    .cart-container {
      justify-content: flex-start;
    }

    .cart-container__img {
      height: 212px;
      padding-right: 62px;
    }

    .item-cart__box-cover {
    margin-right: 17px;
    max-width: 255px;
    max-height: 375px;
  }

  .item-cart__box-title {
    font-size: ${(props) => props.theme.font.size.xxl};
    line-height: ${(props) => props.theme.font.lineHeight.xl};
    margin-top: 30px;
  }

  .item-cart__box-author {
    font-size: ${(props) => props.theme.font.size.ml};
    line-height: ${(props) => props.theme.font.lineHeight.m};
  }

  .item-cart__box-price {
    font-size: ${(props) => props.theme.font.size.xl};
    line-height: ${(props) => props.theme.font.lineHeight.xxl};
  }
  }

  @media (max-width: 750px) {
    .cart-container {
      flex-direction: column-reverse;
      align-items: center;
      padding-bottom: 100px;
    }

    .cart-container__img {
      height: 176px;
      padding-right: 0;
      margin-top: 40px;
    }
  }

  @media (max-width: 500px) {
    .item-cart__box-cover {
    margin-right: 20px;
    max-width: 135px;
    max-height: 202px;
  }

  .item-cart__box-title {
    font-size: ${(props) => props.theme.font.size.m};
    line-height: ${(props) => props.theme.font.lineHeight.s};
    margin-top: 0;
    margin-bottom: 10px;
  }

  .item-cart__box-author {
    font-size: ${(props) => props.theme.font.size.xxs};
    line-height: ${(props) => props.theme.font.lineHeight.xxxs};
    margin-bottom: 27px;
  }

  .item-cart__box-price {
    font-size: ${(props) => props.theme.font.size.m};
    line-height: ${(props) => props.theme.font.lineHeight.sm};
  }

  .item-cart__box-filter {
    margin-bottom: 44px;
  }

  .quantity {
    margin: 7px;
  }
  .item-cart__box-trash {
    margin-left: 25px;
  }
  }

  @media (max-width: 430px) {
    .cart-button {
      width: 100%;
    }

    .cart-button-checkout {
      width: 100%;
    }
    
  }
`;
