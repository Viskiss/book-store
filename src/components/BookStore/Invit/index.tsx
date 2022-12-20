import Styles from './Invit.styles';
import books from '../../images/invite/books.svg';
import girl from '../../images/invite/girl.svg';
import TextBlock from '../TextBlock';

const Invit: React.FC = () => {
  return (
    <Styles>
      <div className="invite_container">
        <TextBlock
        h1="Build your library with us"
        p="Buy two books and get one for free"
        buttonText="Choose a book"
        img={books}
        />
       <img className="img_girl" src={girl} alt="" />
      </div>
    </Styles>
  );
};

export default Invit;
