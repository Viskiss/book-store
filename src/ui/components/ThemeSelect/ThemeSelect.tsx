import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { userSliceActions } from 'src/redux/userStore/userSlice';

import dark from 'src/ui/assets/images/icon/light.svg';
import light from 'src/ui/assets/images/icon/dark.svg';

import StyledTheme from './ThemeSelect.styles';

const ThemeSelect: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const dispatch = useAppDispatch();

  const localTheme = useAppSelector((state) => state.userStore.theme);

  useEffect(() => {
    if (localTheme === 'darkTheme') {
      setTheme(dark);
    } else {
      setTheme(light);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handletChangeTheme = () => {
    if (theme === light) {
      dispatch(userSliceActions.changeTheme('darkTheme'));
      setTheme(dark);
    } else {
      dispatch(userSliceActions.changeTheme('lightTheme'));
      setTheme(light);
    }
  };
  return (
    <StyledTheme light={theme === light} onClick={handletChangeTheme}>
      <div className="theme-container">
        <img className="theme-img" src={theme} alt="" />
        <p className="theme-text">{theme === dark ? 'Dark' : 'Light'}</p>
      </div>
    </StyledTheme>
  );
};

export default ThemeSelect;
