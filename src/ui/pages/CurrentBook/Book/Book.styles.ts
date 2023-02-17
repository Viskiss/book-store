import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: 0.1fr 0.1fr 1fr;
  margin-top: 20px;

  .book-cover__box {
    grid-area: 1 / 1 / 4 / 2;
  }

  .book-info__data {
    grid-area: 1 / 2 / 2 / 3;
  }

  .book-info__rate {
    height: fit-content;
    grid-area: 2 / 2 / 3 / 3;
    margin-bottom: 30px;
  }

  .book-info__box {
    grid-area: 3 / 2 / 4 / 3;
  }

  .book-cover {
    height: 779px;
    width: 522px;
    margin-right: 128px;
    background-color: rgb(165 165 165 / 18%);
  }

  .title {
    font-size: ${(props) => props.theme.font.size.xxxl};
    line-height: ${(props) => props.theme.font.lineHeight.xxxl};
    color: ${(props) => props.theme.color.text.dark};
    margin: 0;
  }

  .book-author {
    font-size: ${(props) => props.theme.font.size.l};
    line-height: ${(props) => props.theme.font.lineHeight.ml};
    margin-top: 0;
  }

  .description {
    font-weight: ${(props) => props.theme.font.weight.m};
    line-height: ${(props) => props.theme.font.lineHeight.ml};
    font-size: ${(props) => props.theme.font.size.l};
    color: ${(props) => props.theme.color.text.dark};
    margin-top: 0;
    margin-bottom: 10px;
  }

  .text {
    font-size: ${(props) => props.theme.font.size.sm};
    line-height: ${(props) => props.theme.font.lineHeight.xs};
    color: ${(props) => props.theme.color.text.main};
    margin: 0 0 74px 0;
  }

  .disabled-button {
    font-weight: ${(props) => props.theme.font.weight.xl};
    font-size: ${(props) => props.theme.font.size.fs20};
    line-height: ${(props) => props.theme.font.lineHeight.lh30};
    background: ${(props) => props.theme.color.grey};
    color: ${(props) => props.theme.color.white};
    cursor: default;
    padding: 10px 50px;
  }

  .simple-button {
    font-weight: ${(props) => props.theme.font.weight.xl};
    font-size: ${(props) => props.theme.font.size.ml};
    line-height: ${(props) => props.theme.font.lineHeight.m};
  }

  .buttons-box {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 82px;
  }

  .buttons-box__title {
    font-size: ${(props) => props.theme.font.size.sm};
    line-height: ${(props) => props.theme.font.lineHeight.xs};
    color: ${(props) => props.theme.color.text.dark};
    margin-top: 0;
  }

  @media (max-width: 1280px) {
    .book-cover {
      height: 679px;
      width: 422px;
      margin-right: 50px;
    }
  }

  @media (max-width: 930px) {
    max-width: 804px;
    .book-cover {
      height: 584px;
      width: 391px;
      margin-right: 21px;
    }

    .book-info__box {
    }

    .title {
      font-size: ${(props) => props.theme.font.size.xl};
      line-height: ${(props) => props.theme.font.lineHeight.xl};
    }

    .book-author {
      font-size: ${(props) => props.theme.font.size.ml};
      line-height: ${(props) => props.theme.font.lineHeight.m};
    }

    .description {
      font-size: ${(props) => props.theme.font.size.sm};
      line-height: ${(props) => props.theme.font.lineHeight.ml};
      margin-bottom: 22px;
    }

    .text {
      font-size: ${(props) => props.theme.font.size.s};
      line-height: ${(props) => props.theme.font.lineHeight.xxs};
      margin: 0 0 50px 0;
    }

    .disabled-button {
      padding: 10px 22px;
    }

    .simple-button {
      padding: 10px 22px;
    }

    .buttons-box {
      gap: 20px;
    }

    .rate-box {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }

    .rate-box__stars {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 735px) {
    .book-cover {
      height: 434px;
      width: 241px;
    }
  }

  @media (max-width: 575px) {
    max-width: 290px;
    grid-template-columns: auto auto;
    grid-template-rows: auto;

    .book-cover__box {
      grid-area: 1 / 1 / 3 / 2;
    }
  
    .book-info__data {
      grid-area: 1 / 2 / 2 / 3;
    }
  
    .book-info__rate {
      grid-area: 2 / 2 / 3 / 3;
    }
  
    .book-info__box {
      max-width: 290px;
      margin-top: -10px;
      grid-area: 3 / 1 / 4 / 3;
    }

    .book-cover__box {
      max-height: 202px;
    }

    .book-info__data {
      max-width: 135px;
      white-space: break-spaces;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .book-info__rate {
    }

    .book-info__box {
      width: 100%;
    }

    .book-info__text {
      width: 100%;
    }

    .book-cover {
      height: 202px;
      width: 135px;
      margin-right: 20px;
    }

    .title {
      font-size: ${(props) => props.theme.font.size.m};
      line-height: ${(props) => props.theme.font.lineHeight.s};
    }

    .book-author {
      font-size: ${(props) => props.theme.font.size.xxs};
      line-height: ${(props) => props.theme.font.lineHeight.xxxs};
    }

    .description {
      font-size: ${(props) => props.theme.font.size.s};
      line-height: ${(props) => props.theme.font.lineHeight.xxs};
      margin-bottom: 15px;
    }

    .text {
      font-size: ${(props) => props.theme.font.size.xxs};
      line-height: ${(props) => props.theme.font.lineHeight.xxxs};
      margin: 0 0 30px 0;
    }

    .disabled-button {
      font-size: ${(props) => props.theme.font.size.xxs};
      line-height: ${(props) => props.theme.font.lineHeight.xxxs};
      width: 135px;
    }

    .simple-button {
      font-size: ${(props) => props.theme.font.size.xxs};
      line-height: ${(props) => props.theme.font.lineHeight.xxxs};
      width: 135px;
    }

    .rate-box__stars {
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;
