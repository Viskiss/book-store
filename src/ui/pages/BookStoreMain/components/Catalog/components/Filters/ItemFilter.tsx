import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import checked from 'src/ui/assets/images/icon/Checked.svg';
import noChecked from 'src/ui/assets/images/icon/No-checked.svg';

type PropsType = {
  name: string;
  handlerChange: (newFilter: string) => void;
  filter: string | string[];
};

const ItemFilter: React.FC<PropsType> = ({ name, filter, handlerChange }) => {
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

  const handlerChangeGenre = (name: string) => {
    setCheckedImg(checked);
    if (filter) {
      const index = filter.indexOf(name);
      if (index !== -1) {
        setCheckedImg(noChecked);
      }
      handlerChange(name);
    }
  };

  return (
    <div onClick={() => handlerChangeGenre(name)} className="select-box__item">
      {typeof filter !== 'string' ? (
        <>
          <img className="select-box__img" src={checkedImg} alt="" />
          <p className="select-box__text">{name}</p>
        </>
      ) : (
        <p
          className={classNames({
            'select-box__text': true,
            'select-box__text-disabled': !select?.includes(name),
          })}
        >
          {name}
        </p>
      )}
    </div>
  );
};

export default ItemFilter;
