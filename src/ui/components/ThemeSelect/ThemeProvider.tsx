import { darkTheme } from 'src/ui/containers/darkTheme';
import { lightTheme } from 'src/ui/containers/lightTheme';
import { ThemeProvider } from 'styled-components';

type PropsType = {
  children: React.ReactNode;
};

const ThemeProvide: React.FC<PropsType> = ({ children }) => {
  const localCurrentTheme = localStorage.getItem('theme');

  const theme = () => {
    if (localCurrentTheme === 'lightTheme') {
      return lightTheme;
    }
    return darkTheme;
  };
  return <ThemeProvider theme={theme()}>{children}</ThemeProvider>;
};

export default ThemeProvide;
