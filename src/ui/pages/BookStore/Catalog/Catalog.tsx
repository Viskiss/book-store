import { useAppSelector } from '../../../../redux/store';

import Loading from '../../../containers/Navigation/components/Loading/Loading';
import Filters from './Filters/Filters';
import ItemBook from './ItemBook/ItemBook';

import StyledCatalog from './Catalog.styles';

const Catalog: React.FC = () => {
  const books = useAppSelector((store) => store.bookStore.books);

  return (
    <StyledCatalog>
      <div className="catalog_container">
        <Filters />
        <div className="books-catalog">
          {!books ? (
            <Loading />
          ) : (
            <div className="books-catalog__items">
              {books.map((el) => (
                <ItemBook
                  price={el.price}
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
      </div>
    </StyledCatalog>
  );
};

export default Catalog;
