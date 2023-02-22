import styled from 'styled-components';

export default styled.div<{ light: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1000;
  margin: 40px;

  .theme-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 50px;
    max-height: 50px;
  }

  .theme-img {
    width: 100%;
    border: 3px solid ${(props) => props.theme.color.background.light};
    border-radius: ${(props) => props.theme.border.radius.round};
  }

  .theme-text {
    color: ${(props) => (props.light ? 'white' : 'black')};
    font-size: ${(props) => props.theme.font.size.xs};
    font-weight: ${(props) => props.theme.font.weight.xl};
    position: absolute;
    z-index: 1000;
  }
`;
