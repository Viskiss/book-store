import Lottie from 'lottie-react';

import options from 'src/utils/lottieOptions';
import loader from 'src/ui/assets/lottieFiles/loading.json';

import { useAppSelector } from 'src/redux/store';

import Filters from './Filters/Filters';
import ItemBook from './ItemBook/ItemBook';

import StyledCatalog from './Catalog.styles';
import Pagination from '../../../components/Pagintion/Pagination';

const Catalog: React.FC = () => {
  const books = useAppSelector((store) => store.bookStore.books);

  return (
    <StyledCatalog>
        <Filters />
        <div className="books-catalog">
          {!books ? (
             <Lottie style={options.loadingStyles} animationData={loader} />
          ) : (
            <div className="books-catalog__items">
              {books.map((el) => (
                <ItemBook
                  price={el.price}
                  date = {el.date}
                  cover={el.cover}
                  author={el.author}
                  rate={el.rate}
                  title={el.title}
                  key={el.id}
                  id={el.id}
                />
              ))}
            </div>
          )}
        </div>
        <Pagination />
    </StyledCatalog>
  );
};

export default Catalog;
