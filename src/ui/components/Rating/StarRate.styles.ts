import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
    align-items: center;

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
    font-size: 16px;
    line-height: 24px;
    color: #b9bac4;
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
`;
