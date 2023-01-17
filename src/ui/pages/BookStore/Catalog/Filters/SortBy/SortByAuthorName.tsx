import { useState } from 'react';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const SortByAuthorName: React.FC = () => {
  const [filter, setFilter] = useState('');

  // const dispatch = useAppDispatch();

  const handleChangeSortName = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl className="select">
      <InputLabel className="select-input">Name</InputLabel>
      <Select
        className="select-input-box"
        value={filter}
        label="Gerne"
        onChange={handleChangeSortName}
      >
        <MenuItem className="select-item" value="A-Z">
          A-Z
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortByAuthorName;
