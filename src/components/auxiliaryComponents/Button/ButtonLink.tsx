import { Link } from 'react-router-dom';
import Styles from './Button.styles';

interface IProps {
  link: string;
  title: string;
  className: string;
}

const ButtonLink: React.FC<IProps> = (props: IProps) => {
  return (
    <Styles className={props.className}>
      <Link to={props.link}>{props.title}</Link>
    </Styles>
  );
};

export default ButtonLink;
