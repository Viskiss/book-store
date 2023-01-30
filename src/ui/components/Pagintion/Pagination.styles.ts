import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .page-button {
    width: 7px;
    height: 14px;
    cursor: pointer;
  }
  .previous-page__button {
    margin-right: 61px;
  }
  .next-page__button {
    margin-left: 61px;
  }
  .indicator-block {
    display: flex;
    align-items: center;
    gap: 36px;
  }
  .indicator {
    height: 14px;
    width: 14px;
    border: 2px solid black;
    border-radius: ${(props) => props.theme.border.round};
  }
  .indicator--selected {
    background-color: black;
  }
`;
