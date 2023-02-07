import styled from 'styled-components';

export default styled.div<{ likedBook?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0 0 60px 0;

  width: calc((100% - (20px * 3)) / 4);

  :nth-child(4n) {
    margin-right: 0;
  }

  .books-rate {
    display: flex;
  }

  .book-info {
    position: relative;
    max-width: 305px;
    margin-top: 30px;
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
    border-radius: ${(props) => props.theme.border.default};
    cursor: pointer;
    width: 90%;
    height: calc((305/100) * 68%);
    height: auto;
    object-fit: contain;
    position: absolute;
    inset: 5%;
    z-index: 123;
  }
  
  .cover-duble {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(14px);
  }
  
  .cover-book {
    border-radius: ${(props) => props.theme.border.default};
    position: relative;
    display: flex;
    height: calc((305/100) * 22% - 5px);
    background-color: #35373724;
    overflow: hidden;
  }

  .book-title {
    text-decoration: none;
    color: ${(props) => props.theme.color.blue};
    font-size: ${(props) => props.theme.fontSize.fs20};
    line-height: ${(props) => props.theme.lineHeight.lh30};
  }

  .book-author {
    font-size: ${(props) => props.theme.fontSize.fs20};
    line-height: ${(props) => props.theme.lineHeight.lh30};
    color: ${(props) => props.theme.color.grey};
    margin-top: 0;
  }

  .simple-button {
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: ${(props) => props.theme.fontSize.fs20};
    line-height: ${(props) => props.theme.lineHeight.lh28};
  }

  .catalog-button {
    width: 100%;
    font-size: ${(props) => props.theme.fontSize.fs20};
    line-height: ${(props) => props.theme.lineHeight.lh28};
   margin-bottom: 10px;
  }

  .rate {
    margin-bottom: 30px;
  }

  .emptyStar {
    margin-right: 27px;
  }

  .fillStar {
    margin-right: 27px;
  }

  .rate-number {
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh24};
    color: ${(props) => props.theme.color.grey};
    padding-top: 5px;
  }

  .cart-button {
    position: absolute;
    padding: 10px 50px;
    width: 100%;
    bottom: 0;
    font-size: ${(props) => props.theme.fontSize.fs20};
    line-height: ${(props) => props.theme.lineHeight.lh28};
    border: 2px solid #0d1821;
    color: ${(props) => props.theme.color.dark};
    background-color: white;
  }

  .cover-book__best {
    position: absolute;
    background: ${(props) => props.theme.color.blue};
    z-index: 1000;
    bottom: 0;
    border-radius: ${(props) => props.theme.border.default};
    padding: 10px 50px;
    font-size: ${(props) => props.theme.fontSize.fs14};
    line-height: 10px;
    font-style: italic;
    color: ${(props) => props.theme.color.white};
    margin: 20px;
  }

  .cover-book__new {
    position: absolute;
    background: ${(props) => props.theme.color.green};
    z-index: 1000;
    bottom: 0;
    border-radius: ${(props) => props.theme.border.default};
    padding: 10px 50px;
    font-size: ${(props) => props.theme.fontSize.fs14};
    line-height: 10px;
    font-style: italic;
    color: ${(props) => props.theme.color.white};
    margin: 20px;
  }

   @media (max-width: 834px) {
    width: calc((100% - (20px * 3)) / 3);
  }
/* 
  @media (max-width: 1120px) {
    .emptyStar {
      margin-right: 24px;
    }

    .fillStar {
      margin-right: 24px;
    }
  }  */

  /* @media (max-width: 590px) {
    max-width: 135px;
    margin: 0 0 30px 0;

    .cover {
      width: 135px;
      height: 192px;
    }

    .book-title {
      font-size: 14px;
      line-height: 21px;
    }

    .book-author {
      font-size: 14px;
      line-height: 21px;
    }

    .cover-book {
      justify-content: center;
      width: 135px;
      height: 192px;
    }

    .star-svg {
      margin-right: 8px;
    }

    .rate {
      margin-bottom: 17px;
    }

    .rate-number {
      font-size: 13px;
      line-height: 20px;
    }

    .star-svg {
      width: 16px;
      height: 16px;
    }

    .emptyStar {
      width: 16px;
      height: 16px;
      margin-right: 7px;
    }

    .fillStar {
      width: 16px;
      height: 16px;
      margin-right: 7px;
    }

    .catalog-button {
      font-size: 14px;
      line-height: 28px;
      padding: 0 21px;
    }

    .cover-book__like {
      left: 0;
      margin: 16px;
      padding: 5px 5px 2px 5px;
    }

    .cover-book__like-img {
      width: 12px;
    }

    .cover-book__best {
      padding: 10px 29px;
      font-size: 10px;
      margin: 0 12px 9px 12px;
    }

    .cover-book__new {
      padding: 10px 44px;
      font-size: 10px;
      margin: 0 12px 9px 12px;
    }
  }  */
`;
