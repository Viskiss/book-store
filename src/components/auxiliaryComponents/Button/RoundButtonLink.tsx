import { Link } from 'react-router-dom';
import Styles from './RoundButton.styles';

interface IProps {
  link: string;
  children: React.ReactNode;
}

const RoundButtonLink: React.FC<IProps> = (props: IProps) => {
  return (
    <Styles>
      <Link to={props.link}>{props.children}</Link>
    </Styles>
  );
};

export default RoundButtonLink;
