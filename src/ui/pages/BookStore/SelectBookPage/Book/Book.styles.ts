import styled from 'styled-components';

export default styled.div`
  display: flex;

  .book-cover {
    height: 779px;
    width: 522px;
    margin-right: 128px;
    background-color: rgb(165 165 165 / 18%);
  }

  .title {
    font-size: ${(props) => props.theme.fontSize.fs40};
    line-height: ${(props) => props.theme.lineHeight.lh60};
    margin: 0;
  }

  .book-author {
    font-size: ${(props) => props.theme.fontSize.fs24};
    line-height: ${(props) => props.theme.lineHeight.lh36};
    margin-top: 0;
  }

  .description {
    font-weight: ${(props) => props.theme.fontWeight.middle};
    line-height: ${(props) => props.theme.lineHeight.lh36};;
    font-size: ${(props) => props.theme.fontSize.fs24};
    line-height: ${(props) => props.theme.lineHeight.lh36};
    margin-bottom: 10px;
  }

  .text {
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh24};
    margin: 0 0 74px 0;
  }

  .disabled-button {
    font-weight: ${(props) => props.theme.fontWeight.height};
    font-size: ${(props) => props.theme.fontSize.fs20};
    line-height: ${(props) => props.theme.lineHeight.lh30};
    background: ${(props) => props.theme.color.grey};
    color: ${(props) => props.theme.color.white};
    padding: 10px 50px;
  }

  .simple-button {
    font-weight: ${(props) => props.theme.fontWeight.height};
    font-size: ${(props) => props.theme.fontSize.fs20};
    line-height: ${(props) => props.theme.lineHeight.lh30};
  }

  .buttons-box {
    display: flex;
    justify-content: flex-start;
    gap: 82px;

  }

  .buttons-box__title {
    margin-top: 0;
  }
`;
