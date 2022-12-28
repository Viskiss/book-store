import Styles from './RoundButton.styles';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const RoundButtonLink: React.FC<IProps> = (props: IProps) => {
  return (
    <Styles className={props.className}>
      {props.children}
    </Styles>
  );
};

export default RoundButtonLink;
