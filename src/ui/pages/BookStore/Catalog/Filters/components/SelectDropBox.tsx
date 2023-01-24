import arrow from 'src/ui/assets/images/arrowRight.svg';

import StyledBox from './SelectFilterBox.styles';

interface IProps {
  title: string;
  handler: () => void;
}

const SelectDropBox: React.FC<IProps> = ({ title, handler }) => {
  return (
    <StyledBox>
      <div onClick={() => handler()} className="select-box">
        <span className="select-box-title">{title}</span>
        <img className="select-box--arrow" src={arrow} alt="" />
      </div>
    </StyledBox>
  );
};

export default SelectDropBox;
