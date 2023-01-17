import React, { useState } from 'react';

import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Slider from '@mui/material/Slider';

// import { useAppDispatch } from '../../../../../../redux/store';

const SortByPrice: React.FC = () => {
  const [price, setPrice] = useState<number[]>([20, 37]);

  const selectPrice = 0;

  // const dispatch = useAppDispatch();

  const handleChangePrice = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - 10), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + 10)]);
    }
  };

  const hangleSearchPrice = (e: SelectChangeEvent<number>) => {
    // eslint-disable-next-line no-console
    console.log(e.target.value);
  };

  return (
    <FormControl className="select">
      <InputLabel className="select-input">Price</InputLabel>
      <Select
        className="select-input-box"
        value={selectPrice}
        label="Price"
        onChange={hangleSearchPrice}
      >
        <MenuItem>
          <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={price}
            onChange={handleChangePrice}
            valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
            disableSwap
          />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortByPrice;
