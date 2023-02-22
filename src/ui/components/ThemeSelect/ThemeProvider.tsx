import { useAppSelector } from 'src/redux/store';
import { darkTheme } from 'src/ui/containers/darkTheme';
import { lightTheme } from 'src/ui/containers/lightTheme';
import { ThemeProvider } from 'styled-components';

type PropsType = {
  children: React.ReactNode;
};

const ThemeProvide: React.FC<PropsType> = ({ children }) => {
  const localTheme = useAppSelector((state) => state.userStore.theme);

  const theme = () => {
    if (localTheme === 'lightTheme') {
      return lightTheme;
    }
    return darkTheme;
  };

  return <ThemeProvider theme={theme()}>{children}</ThemeProvider>;
};

export default ThemeProvide;
