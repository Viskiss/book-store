import { Link } from 'react-router-dom';

import Button from 'src/ui/components/Button';

import constants from 'src/utils/constants';

import Styles from './TextBlock.styles';

interface IProps {
  h1: string;
  p: string;
  img?: string;
  img2?: string;
  img3?: string;
  link: string;
  title?: string;
  className?: string;
}

const TextBlock: React.FC<IProps> = (props: IProps) => {
  return (
    <Styles>
      <div className="block-text_main block-text_auth">
        <h1 className="title">{props.h1}</h1>
        <div className="block_text auth-text">
          <p className="text">{props.p}</p>
        </div>
        {props.className === 'auth' ? (
          <>
            <Link to={constants.routesLink.signIn}>
              <Button className="auth-button">Sign In</Button>
            </Link>
            <Link to={constants.routesLink.signUp}>
              <Button className="auth-button">Sign Up</Button>
            </Link>
          </>
        ) : (
          <Link to={props.link}>
            <Button>{props.title}</Button>
          </Link>
        )}
      </div>
      <picture>
        <source media="(max-width: 425px)" srcSet={props.img3} />
        <source media="(max-width: 840px)" srcSet={props.img2} />
        <img
          className="block-text_img img-book-banner img-auth-banner"
          src={props.img}
          alt=""
        />
      </picture>
    </Styles>
  );
};

export default TextBlock;
