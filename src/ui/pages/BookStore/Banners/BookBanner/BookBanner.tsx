import TextBlock from 'src/ui/components/TextBlock';

import constants from 'src/utils/constants';

import books from 'src/ui/assets/images/booksFill.svg';
import girl from 'src/ui/assets/images/girl.svg';
import girl2 from 'src/ui/assets/images/girl2.svg';

import StyledBookBanner from './BookBaner.styles';

const BookBaner: React.FC = () => {
  return (
    <StyledBookBanner>
      <TextBlock
        h1="Build your library with us"
        p="Buy two books and get one for free"
        title="Choose a book"
        img={books}
        link={constants.routesLink.home}
      />
      <picture>
        <source media="(max-width:1024px)" srcSet={girl2} />
        <img className="img_girl" src={girl} alt="" />
      </picture>
    </StyledBookBanner>
  );
};

export default BookBaner;
