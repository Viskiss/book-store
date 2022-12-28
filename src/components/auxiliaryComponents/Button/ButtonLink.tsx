import Styles from './Button.styles';

interface IProps {
  className: string;
  children: React.ReactNode;
}

const ButtonLink: React.FC<IProps> = (props: IProps) => {
  return (
    <Styles className={props.className}>
     {props.children}
    </Styles>
  );
};

export default ButtonLink;
