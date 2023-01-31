import styled from 'styled-components';

export default styled.section`
  display: flex;
  justify-content: center;
  max-width: 1280px;

  .liked__books {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }

  .cart-container {
    display: flex;
    justify-content: center;
  }

  .cart_container__img {
    height: 261px;
  }

  .item-liked__box {
    background: ${(props) => props.theme.color.white};
    border-radius: ${(props) => props.theme.border.default};
    transition: 0.5s;
  }

  .item-liked__box:hover {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }

  .item-liked__box-cover {
    position: relative;
  }

  .item-liked__cover {
    padding: 15px;
    width: 305px;
    height: 448px;
    border-radius: ${(props) => props.theme.border.default};
  }

  .item-liked__like {
    position: absolute;
    right: 0;
    padding: 10px 10px 6px 10px;
    border-radius: ${(props) => props.theme.border.round};
  }

  .item-liked__box-data {
    padding: 0 10px 0 10px;
  }
`;
