import styled from 'styled-components';

export default styled.section`
  background: ${(props) => props.theme.color.background.light};
  color: ${(props) => props.theme.color.text.dark};
  display: flex;
  justify-content: space-between;
  border-radius: ${(props) => props.theme.border.radius.main};
  margin-bottom: 120px;
  max-height: 400px;
  width: 100%;

  .img_girl {
    padding: 0 98px;
  }

  @media (max-width: 1024px) {
    /* width: 804px; */
    position: relative;

    .img_girl {
      padding: 0 14px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  @media (max-width: 650px) {
    max-width: 290px;
    max-height: 505px;
    flex-direction: column;
    align-items: center;

    .img_girl {
      position: static;
      width: 253px;
      margin-top: 56px;
    }

  }
`;
