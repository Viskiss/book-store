import Styles from './Invit.styles';
import books from '../../images/invite/books.svg';
import books2 from '../../images/invite/books2.svg';
import girl from '../../images/invite/girl.svg';
import girl2 from '../../images/invite/girl2.svg';
import TextBlock from '../../auxiliaryComponents/TextBlock/TextBlock';

const Invit: React.FC = () => {
  return (
    <Styles>
      <div className="invite_container">
        <TextBlock
          h1="Build your library with us"
          p="Buy two books and get one for free"
          title="Choose a book"
          img={books}
          img2={books2}
          img3={books2}
          link="/lll"
        />
        <picture>
          <source media="(max-width:834px)" srcSet={girl2} />
          <img className="img_girl" src={girl} alt="" />
        </picture>
      </div>
    </Styles>
  );
};

export default Invit;
