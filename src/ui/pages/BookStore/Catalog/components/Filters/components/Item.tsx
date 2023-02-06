import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import checked from 'src/ui/assets/images/icon/Checked.svg';
import noChecked from 'src/ui/assets/images/icon/No-checked.svg';

interface IProps {
  name: string;
  title: string;
  id: number;
  setState: (newFilter: string) => void;
  filter: string[] | string;
}

const ItemGenre: React.FC<IProps> = ({ name, id, filter, setState, title }) => {
  const [searchParams] = useSearchParams();

  const [checkedImg, setCheckedImg] = useState(noChecked);
  const genre = searchParams.get('genres');
  const select = searchParams.get('select');

  useEffect(() => {
    const searchArr = genre?.split(',').includes(name);
    if (genre === name || searchArr) {
      setCheckedImg(checked);
    } else {
      setCheckedImg(noChecked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeGenre = (name: string) => {
    setCheckedImg(checked);
    const index = filter.indexOf(name);
    if (index !== -1) {
      setCheckedImg(noChecked);
    }
    setState(name);
  };

  const activeSelectFilter = classNames({
    'select-box__text': true,
    'select-box__text-disabled': !select?.includes(name),
  });

  return (
    <div
      onClick={() => handleChangeGenre(name)}
      className="select-box__item"
      key={id}
    >
      {' '}
      {title === 'Genre' && (
        <>
          <img className="select-box__img" src={checkedImg} alt="" />
          <p className="select-box__text">{name}</p>
        </>
      )}
      {title !== 'Genre' && <p className={activeSelectFilter}>{name}</p>}
    </div>
  );
};

export default ItemGenre;
