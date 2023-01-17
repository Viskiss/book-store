import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  .button-check {
    background-color: inherit;
    border: none;
    margin-right: 10px;
  }

  .select-item {
    button {
      background-color: inherit;
      border: none;
    }
  }

  fieldset {
    border: none;
  }

  .select {
    width: 196px;
    height: 48px;
    background-color: #f0f4ef;
    border-radius: 16px;
    align-items: stretch;
    justify-content: center;
    margin-left: 20px;
  }

  .select-input-box {
    color: #344966;
  }
`;
