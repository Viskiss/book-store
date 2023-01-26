import { useState } from 'react';

import type { GenreType } from 'src/types';

import Item from './Item';
import SelectDropBox from './SelectDropBox';

import StyledSelect from './SelectFilterBox.styles';

interface IProps {
  title: string;
  typeSelect?: boolean;
  items: GenreType[] | [];
  filter: string[] | string;
  setState: (newFilter: string) => void;
}

const SelectFilterBox: React.FC<IProps> = ({
  items,
  setState,
  filter,
  title,
  typeSelect,
}) => {
  const [dropSelect, setDropSelect] = useState(false);

  const handleDropSelect = () => {
    if (dropSelect) {
      setDropSelect(false);
    }
    if (!dropSelect) {
      setDropSelect(true);
    }
  };

  return (
    <StyledSelect
      drop={dropSelect}
      typeSelect={typeSelect}
    >
      <SelectDropBox handler={handleDropSelect} title={title} />
      <div onMouseLeave={() => setDropSelect(false)} className="select-box__items">
        {items.map((item) => (
          <Item
            title={title}
            filter={filter}
            setState={setState}
            key={item.id}
            name={item.name}
            id={item.id}
          />
        ))}
      </div>
    </StyledSelect>
  );
};

export default SelectFilterBox;
