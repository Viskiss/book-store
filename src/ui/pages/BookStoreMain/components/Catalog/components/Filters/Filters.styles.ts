import styled from 'styled-components';

export default styled.div<{dark: boolean}>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  .filters__title {
    font-size: ${(props) => props.theme.font.size.xxl};
    line-height: ${(props) => props.theme.font.lineHeight.xxxl};
    margin: 0;
    color: ${(props) => (props.dark ? props.theme.color.text.light : props.theme.color.text.dark)}
  }

  .filters__book-filter {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  @media (max-width: 950px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    .filters__book-filter {
      flex-direction: column;
    }
  }
`;
