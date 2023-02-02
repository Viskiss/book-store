import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;

  .rate-box__stars {
    display: flex;
    align-items: center;
  }

  .emptyStar {
    margin-right: 17px;
    width: 27px;
  }

  .fillStar {
    margin-right: 17px;
    width: 27px;
  }

  .initial-rate {
    display: flex;
  }

  .number {
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh24};
    color: ${(props) => props.theme.color.grey};
  }
  .star-rate {
    margin-right: 14px;
    width: 30px;
  }

  .rate-this-book {
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh24};
    color: ${(props) => props.theme.color.grey};
  }

  .arrow-box {
    display: flex;
  }

  .react-simple-star-rating {
    margin-right: 10px;
  }

  @media (max-width: 930px) {
    .star-rate {
      width: 22px;
    }

    .initial-rate {
      margin-bottom: -10px;
    }

    .rate-box__stars {
      margin-bottom: -10px;
    }

    .emptyStar {
      width: 22px;
    }

    .fillStar {
      width: 22px;
    }
  }

  @media (max-width: 575px) {
    min-width: 290px;
    .rate-this-book {
      font-size: ${(props) => props.theme.fontSize.fs12};
      line-height: ${(props) => props.theme.lineHeight.lh18};
      margin-top: -10px;
      margin-bottom: 55px;
    }

    .arrow-box__img {
      display: none;
    }

    .initial-rate {
    align-items: baseline;
  }

    .number {
      font-size: ${(props) => props.theme.fontSize.fs13};
      line-height: ${(props) => props.theme.lineHeight.lh20};
      color: ${(props) => props.theme.color.grey};
      margin-top: 9px;
    }
    .star-rate {
      width: 13px;
      margin-right: 7px;
    }

    .emptyStar {
      width: 13px;
      margin-right: 16px;
    }

    .fillStar {
      width: 13px;
      margin-right: 16px;
    }
  }
`;
