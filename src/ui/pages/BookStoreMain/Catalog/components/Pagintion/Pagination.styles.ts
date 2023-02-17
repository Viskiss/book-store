import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .pagination-button {
    background-color: transparent;
    height: fit-content;
    padding: 0;

    &:disabled {
      background-color: inherit;
      opacity: 0.5;
    }
  }

  .counter {
    height: 14px;
    width: 14px;
    border: 2px solid black;
    border-radius: ${(props) => props.theme.border.radius.round};
    cursor: pointer;
  
    &:disabled {
      background-color: inherit;
      opacity: 0.5;
    }
  }

  .counter-block {
    display: flex;
    align-items: center;
    gap: 36px;
  }

  .counter-selected {
    background-color: black;
  }

  .page-button {
    width: 7px;
    height: 14px;
  }

  .previous-page__button {
    margin-right: 61px;
  }

  .next-page__button {
    margin-left: 61px;
  }
`;
