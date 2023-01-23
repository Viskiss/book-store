import styled from 'styled-components';

export default styled.div<{ drop: boolean }>`
  position: relative;
  margin-left: 20px;

  .select-box--items {
    display: block;
    position: absolute;
    width: 197px;
    border-radius: 16px;
    background: #f0f4ef;
  }
  .select-box--item {
    display: ${(props) => (props.drop ? 'flex' : 'none')};
    :nth-child(1) {
      border-radius: 16px;
    }
    :nth-child(5) {
      border-radius: 16px;
    }
    font-size: 16px;
    line-height: 28px;
    color: #344966;
    background: #f0f4ef;
  }

  .select-box--text {
    margin: 12px 0 12px 15px;
  }

  .select-box--input {
    border: none;
    font-weight: 700;
    font-size: 18px;
    color: #0d1821;
    line-height: 27px;
    padding: 10px 0 10px 17px;
    width: 179px;
  }

  .select-box--button {
    position: absolute;
    border: none;
    top: 15px;
    right: 20px;
  }

  .select-box--arrow {
    transform: ${(props) => (props.drop ? 'rotate(90deg)' : '')};
  }
`;
