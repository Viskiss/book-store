import { Link } from 'react-router-dom';

import { navigationRoutes } from 'src/utils/constants';

import Button from 'src/ui/components/Button';

import Styles from './TextBlock.styles';

type PropType = {
  h1: string;
  p: string;
  img?: string;
  img2?: string;
  img3?: string;
  link: string;
  title?: string;
  className?: string;
};

const TextBlock: React.FC<PropType> = ({
  h1,
  link,
  p,
  className,
  img2,
  img3,
  img,
  title,
}) => {
  return (
    <Styles>
      <div className="block-text_main block-text_auth">
        <h1 className="title">{h1}</h1>
        <div className="block_text auth-text">
          <p className="text">{p}</p>
        </div>
        {className === 'auth' ? (
          <>
            <Link to={navigationRoutes.signIn}>
              <Button className="auth-button">Sign In</Button>
            </Link>
            <Link to={navigationRoutes.signUp}>
              <Button className="auth-button">Sign Up</Button>
            </Link>
          </>
        ) : (
          <Link to={link}>
            <Button>{title}</Button>
          </Link>
        )}
      </div>
      <picture>
        <source media="(max-width: 425px)" srcSet={img3} />
        <source media="(max-width: 840px)" srcSet={img2} />
        <img
          className="block-text_img img-book-banner img-auth-banner"
          src={img}
          alt=""
        />
      </picture>
    </Styles>
  );
};

export default TextBlock;
