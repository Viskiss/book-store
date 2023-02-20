import { useEffect, useState } from 'react';

import { useAppDispatch } from 'src/redux/store';
import { userSliceActions } from 'src/redux/userStore/userSlice';

import light from 'src/ui/assets/images/icon/light.svg';
import dark from 'src/ui/assets/images/icon/dark.svg';

import StyledTheme from './ThemeSelect.styles';

const ThemeSelect: React.FC = () => {
  const [theme, setTheme] = useState(light);
  const [theme2, setTheme2] = useState(dark);

  const dispatch = useAppDispatch();

  const localTheme = localStorage.getItem('theme') === 'themeDark';

  useEffect(() => {
    if (localTheme) {
      setTheme(dark);
      setTheme2(light);
    } else {
      setTheme(light);
      setTheme2(dark);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handletChangeTheme = () => {
    if (theme === light) {
      dispatch(userSliceActions.changeTheme(1));
      setTheme(dark);
      setTheme2(light);
    } else {
      dispatch(userSliceActions.changeTheme(0));
      setTheme(light);
      setTheme2(dark);
    }
  };
  return (
    <StyledTheme light={theme === light} onClick={handletChangeTheme}>
      <div className="theme-container">
        <img className="theme-img" src={theme} alt="" />
        <img className="theme-img-back" src={theme2} alt="" />
        <p className="theme-text">{localTheme ? 'Dark' : 'Light'}</p>
      </div>
    </StyledTheme>
  );
};

export default ThemeSelect;
