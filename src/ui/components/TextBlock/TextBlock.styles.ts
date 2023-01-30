import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .block-text_main {
    padding-left: 108px;
    z-index: 1000;
  }

  .block_text {
    width: 200px;
  }

  .title {
    font-weight: ${(props) => props.theme.fontWeight.height};
    font-size: ${(props) => props.theme.fontSize.fs40};
    line-height: ${(props) => props.theme.lineHeight.lh60};
    color: ${(props) => props.theme.color.dark};
    margin-bottom: 10px;
    margin-top: 80px;
  }

  .text {
    font-size: ${(props) => props.theme.fontSize.fs20};
    line-height: ${(props) => props.theme.lineHeight.lh30};
    color: ${(props) => props.theme.color.blue};
    margin-bottom: 50px;
    margin-top: 0;
  }

  .block-text_img {
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 1215px) {
    .block-text_main {
      padding: 0 0 56px 40px;
      z-index: 1000;
    }

    .title {
      font-size: ${(props) => props.theme.fontSize.fs32};
      line-height: ${(props) => props.theme.lineHeight.lh48};
      margin-bottom: 0;
    }

    .text {
      font-size: ${(props) => props.theme.fontSize.fs16};
      line-height: ${(props) => props.theme.lineHeight.lh24};
      margin-bottom: 40px;
    }

    .block-text_img {
      width: 361px;
    }
  }

  @media (max-width: 970px) {
    .title {
      margin-top: 45px;
      margin-bottom: 10px;
      font-size: ${(props) => props.theme.fontSize.fs24};
    }
  }

  @media (max-width: 820px) {
    .title {
      font-size: ${(props) => props.theme.fontSize.fs18};
    }
    .block-text_img {
      width: 232px;
    }
  }

  @media (max-width: 600px) {
    .block-text_main {
      padding: 0 40px 0 20px;
    }

    .text {
      margin-bottom: 20px;
    }

    .title {
      margin-top: 5px;
    }

    .block-text_img {
      right: 0;
      bottom: 22px;
    }
  }
`;
