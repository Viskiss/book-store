import { useState } from 'react';

import checked from 'ui/assets/images/icon/Checked.svg';
import noChecked from 'ui/assets/images/icon/No-checked.svg';

interface IProps {
  name: string;
  id: number;
  filter: string[];
  setFilter: (newFilter: string) => void;
}

const ItemGenre: React.FC<IProps> = ({ name, id, filter, setFilter }) => {
  const [checkedImg, setCheckedImg] = useState(noChecked);

  const handleChangeGenre = (name: string) => {
    setCheckedImg(checked);
    const index = filter.indexOf(name);
    if (index !== -1) {
      setCheckedImg(noChecked);
    }
    setFilter(name);
  };

  return (
          <div
            onClick={() => handleChangeGenre(name)}
            className="select-box--item"
            key={id}
          >
            <span className="select-box--check">
              {' '}
              <img className="select-box--img" src={checkedImg} alt="" />
            </span>
            <p className="select-box--text">{name}</p>
          </div>
  );
};

export default ItemGenre;
