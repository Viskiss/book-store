import { useAppSelector } from '../../../../redux/store';
import Loading from '../../../containers/Navigation/components/Loading/Loading';
import Styles from './Catalog.styles';
import ItemBook from './ItemBook/ItemBook';

const gernes = [{ title: 'All' }, { title: 'Fantasy' }];

const Catalog: React.FC = () => {
  const books = useAppSelector((store) => store.bookStore.books);

  return (
    <Styles>
      <div className="catalog_container">
        <div className="filtres">
        <div className="filter-books">
        <h2 className="title-catalog">Catalog</h2>
        </div>
          <form name="myForm">
            <select name="Gerne">
              {gernes.map((gerne) => (
                <option key={gerne.title} value={gerne.title}>
                  {gerne.title}
                </option>
              ))}
            </select>
          </form>
        </div>
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
    </Styles>
  );
};

export default Catalog;
