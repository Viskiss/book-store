// import { useEffect } from 'react';
// import { getAllBooksThunk } from '../../../redux/bookStore/bookStoreThunks';
// import { useAppDispatch, useAppSelector } from '../../../redux/store';

import Styles from './Catalog.styles';
// import ItemBook from './ItemBook';

const gernes = [{ title: 'All' }, { title: 'Fantasy' }];

const Catalog: React.FC = () => {
  // const dispatch = useAppDispatch();

  // const books = useAppSelector((store) => store.bookStore.books);

  // eslint-disable-next-line no-console
  // console.log(books);

  // useEffect(() => {
  //   dispatch(getAllBooksThunk());
  // }, [dispatch]);

  return (
    <Styles>
      <div className="catalog_container">
        <div className="filtres">
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
        <div className="books-box" />
        {/* {books.map((book) => (
                <ItemBook
                title={book.title}
                img={book.img}
                author={book.author}
                id={book.id}
                price={book.price}
                rate={book.rate}
                key={book.id}
                />
        ))} */}
      </div>
    </Styles>
  );
};

export default Catalog;
