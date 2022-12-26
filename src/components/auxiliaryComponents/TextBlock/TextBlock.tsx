import Styles from './TextBlock.styles';
import ButtonLink from '../Button/ButtonLink';

interface IProps {
  h1: string;
  p: string;
  img?: string;
  img2?: string;
  img3?: string;
  link: string;
  title: string;
  className: string;
}

const TextBlock: React.FC<IProps> = (props: IProps) => {
  return (
  <Styles>
    <div className="block-text_main auth">
       <h1>{props.h1}</h1>
          <div className="block_text auth-text">
            <p>{props.p}</p>
          </div>
          {props.className === 'auth-button'
            ? (<><ButtonLink className="auth-button" link="/logIn" title="Log In" />
            <ButtonLink className="auth-button" link="/signUp" title="Sign Up" />
               </>)
            : (<ButtonLink className={props.className} link={props.link} title={props.title} />)}
    </div>
    <picture>
          <source media="(max-width: 425px)" srcSet={props.img3} />
          <source media="(max-width: 1024px)" srcSet={props.img2} />
       <img className="img-back-invite img-back-auth" src={props.img} alt="" />
    </picture>
  </Styles>
  );
};

export default TextBlock;
