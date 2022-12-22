import Styles from './TextBlock.styles';
import ButtonLink from '../Button/ButtonLink';

interface IProps {
  h1: string;
  p: string;
  img: string;
  img2: string;
  img3: string;
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
    <picture>
          <source media="(max-width:834px)" srcSet={props.img2} />
          <source media="(min-width:320pxpx)" srcSet={props.img3} />
       <img className="img-back-invite img-back-auth" src={props.img} alt="" />
    </picture>
  </Styles>
  );
};

export default TextBlock;
