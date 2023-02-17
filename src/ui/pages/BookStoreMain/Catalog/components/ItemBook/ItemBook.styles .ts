import styled from 'styled-components';

export default styled.div<{ likedBook?: boolean; best?: boolean }>`
  display: flex;
  flex-direction: column;
  width: calc((100% - (20px * 3)) / 4);

  .books-rate {
    display: flex;
    justify-content: space-around;
    margin-bottom: 32px;
  }

  .book-info {
    position: relative;
    max-width: 305px;
    margin-top: 30px;
  }

  .book-info__title-box {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cover-book__like {
    opacity: ${(props) => (props.likedBook ? '1' : '0.7')};
    position: absolute;
    z-index: 1000;
    margin: 20px;
    padding: 10px 10px 6px 10px;
    border-radius: 100%;
  }

  .cover {
    border-radius: ${(props) => props.theme.border.radius.main};
    cursor: pointer;
    width: 100%;
    height: auto;
    object-fit: contain;
    position: absolute;
    inset: 0;
    z-index: 123;
  }

  .cover-duble {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(14px);
  }

  .cover-book {
    border-radius: ${(props) => props.theme.border.radius.main};
    position: relative;
    display: flex;
    height: calc((305 / 100) * 21%);
    background-color: #35373724;
    overflow: hidden;
  }

  .book-title {
    text-decoration: none;
    color: ${(props) => props.theme.color.text.main};
    font-size: ${(props) => props.theme.font.size.ml};
    line-height: ${(props) => props.theme.font.lineHeight.m};
  }

  .book-author {
    font-size: ${(props) => props.theme.font.size.ml};
    line-height: ${(props) => props.theme.font.lineHeight.m};
    color: ${(props) => props.theme.color.text.medium};
    margin-top: 0;
  }

  .book-info__author-box {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .simple-button {
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: ${(props) => props.theme.font.size.ml};
    line-height: ${(props) => props.theme.font.lineHeight.sm};
  }

  .catalog-button {
    width: 100%;
    font-size: ${(props) => props.theme.font.size.ml};
    line-height: ${(props) => props.theme.font.lineHeight.sm};
  }

  .catalog-button__box {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .rate-number {
    font-size: ${(props) => props.theme.font.size.sm};
    line-height: ${(props) => props.theme.font.lineHeight.xs};
    color: ${(props) => props.theme.color.text.medium};
    padding-top: 5px;
  }

  .cover-book__label {
    position: absolute;
    background: ${(props) => (props.best
    ? props.theme.color.button.main
    : props.theme.color.info.light)};
    z-index: 1000;
    bottom: 0;
    border-radius: ${(props) => props.theme.border.radius.main};
    line-height: ${(props) => props.theme.font.lineHeight.xxxs};
    padding: 10px 50px;
    font-size: ${(props) => props.theme.font.size.s};
    line-height: 10px;
    font-style: italic;
    color: ${(props) => props.theme.color.text.light};
    margin: 20px;
  }

  @media (max-width: 1024px) {
    .catalog-button {
      font-size: ${(props) => props.theme.font.size.sm};
    }
  }

  @media (max-width: 834px) {
    width: calc((100% - (20px * 3)) / 3);

    .rate-star {
      width: 18px;
    }

    .cover-book__best {
      padding: 10px 50px;
      margin: 0 0 21px 16px;
    }

    .cover-book__new {
      padding: 10px 50px;
      margin: 0 0 21px 16px;
    }

    .book-title {
      font-size: ${(props) => props.theme.font.size.sm};
      line-height: ${(props) => props.theme.font.lineHeight.xs};
    }

    .book-author {
      font-size: ${(props) => props.theme.font.size.sm};
      line-height: ${(props) => props.theme.font.lineHeight.xs};
    }
  }

  @media (max-width: 600px) {
    width: calc((100% - (20px * 2)) / 2);

    .rate-star {
      width: 18px;
    }

    .cover-book__label {
      padding: 10px 50px;
      margin: 0 0 21px 16px;
    }

    .book-title {
      font-size: ${(props) => props.theme.font.size.s};
      line-height: ${(props) => props.theme.font.lineHeight.xxs};
    }

    .book-author {
      font-size: ${(props) => props.theme.font.size.s};
      line-height: ${(props) => props.theme.font.lineHeight.xxs};
    }
  }

  @media (max-width: 470px) {
    .cover-book__like-img {
      width: 12px;
    }

    .books-rate {
      margin-bottom: 10px;
    }

    .rate-number {
      font-size: ${(props) => props.theme.font.size.s};
    }

    .rate-star {
      width: 14px;
    }

    .book-info {
      margin-top: 15px;
    }

    .cover-book__like {
      margin: 17px;
      padding: 7px 7px 3px 7px;
    }

    .catalog-button {
      font-size: ${(props) => props.theme.font.size.s};
      padding: 3px 21px;
    }

    .cover-book__label {
      padding: ${(props) => (props.best ? '5px 29px' : '5px 42px')};
      margin: 0 10px 9px 10px;
      font-size: ${(props) => props.theme.font.size.xxxs};
      line-height: ${(props) => props.theme.font.lineHeight.xxxs};
    }
  }
`;
