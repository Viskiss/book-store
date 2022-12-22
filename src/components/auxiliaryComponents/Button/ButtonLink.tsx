import { Link } from 'react-router-dom';
import Styles from './Button.styles';

interface IProps {
  link: string;
  title: string;
}

const ButtonLink: React.FC<IProps> = (props: IProps) => {
  return (
    <Styles>
      <Link to={props.link}>{props.title}</Link>
    </Styles>
  );
};

export default ButtonLink;
