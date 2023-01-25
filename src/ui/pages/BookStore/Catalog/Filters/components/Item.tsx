import { useState } from 'react';

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
  const [checkedImg, setCheckedImg] = useState(noChecked);

  const handleChangeGenre = (name: string) => {
    setCheckedImg(checked);
    const index = filter.indexOf(name);
    if (index !== -1) {
      setCheckedImg(noChecked);
    }
    setState(name);
  };

  return (
    <div
      onClick={() => handleChangeGenre(name)}
      className="select-box__item"
      key={id}
    > {title === 'Genre' && <img className="select-box__img" src={checkedImg} alt="" />}

      <p className="select-box__text">{name}</p>
    </div>
  );
};

export default ItemGenre;
