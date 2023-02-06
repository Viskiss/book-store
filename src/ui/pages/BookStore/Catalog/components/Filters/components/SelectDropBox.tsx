import arrow from 'src/ui/assets/images/icon/arrowRight.svg';

import polygon from 'src/ui/assets/images/icon/Polygon.svg';

import StyledBox from './SelectFilterBox.styles';

interface IProps {
  title: string;
  handler: () => void;
}

const SelectDropBox: React.FC<IProps> = ({ title, handler }) => {
  return (
    <StyledBox>
      <div onClick={() => handler()} className="select-box">
      <img className="select-box__polygon" src={polygon} alt="" />
        <span className="select-box__title">{title}</span>
        <img className="select-box__arrow" src={arrow} alt="" />
      </div>
    </StyledBox>
  );
};

export default SelectDropBox;
