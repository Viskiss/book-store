import { useEffect, useState } from 'react';

import light from 'src/ui/assets/images/icon/light.svg';
import dark from 'src/ui/assets/images/icon/dark.svg';

import StyledTheme from './ThemeSelect.styles';

const ThemeSelect: React.FC = () => {
  const [theme, setTheme] = useState(light);
  const [theme2, setTheme2] = useState(dark);

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
      localStorage.setItem('theme', 'lightTheme');
      setTheme(dark);
      setTheme2(light);
    } else {
      localStorage.setItem('theme', 'darkTheme');
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
