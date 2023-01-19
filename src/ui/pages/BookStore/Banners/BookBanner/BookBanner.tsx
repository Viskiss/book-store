import TextBlock from 'ui/components/TextBlock/TextBlock';

import StyledBookBanner from './BookBaner.styles';

import books from './images/books.svg';
import books2 from './images/books2.svg';
import girl from './images/girl.svg';
import girl2 from './images/girl2.svg';

const BookBaner: React.FC = () => {
  return (
    <StyledBookBanner>
      <div className="invite_container">
        <TextBlock
          h1="Build your library with us"
          p="Buy two books and get one for free"
          title="Choose a book"
          img={books}
          img2={books2}
          img3={books2}
          link="/catalog"
          className="simple-button"
        />
        <picture>
          <source media="(max-width:1024px)" srcSet={girl2} />
          <img className="img_girl" src={girl} alt="" />
        </picture>
      </div>
    </StyledBookBanner>
  );
};

export default BookBaner;
