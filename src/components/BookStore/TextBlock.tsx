import Styles from './TextBlock.styles';
import ButtonLink from '../Button/ButtonLink';

interface IProps {
  h1: string;
  p: string;
  img: string;
  link: string;
  title: string;
}

const TextBlock: React.FC<IProps> = (props: IProps) => {
  return (
  <Styles>
    <div className="block-text_main auth">
       <h1>{props.h1}</h1>
          <div className="block_text auth-text">
            <p>{props.p}</p>
          </div>
        <ButtonLink link={props.link} title={props.title} />
    </div>
       <img src={props.img} alt="" />
  </Styles>
  );
};

export default TextBlock;
