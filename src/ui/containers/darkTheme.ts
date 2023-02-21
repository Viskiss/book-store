import _defaultsDeep from 'lodash/defaultsDeep';

import { lightTheme } from './lightTheme';

export type ThemeType = typeof lightTheme;

export const darkTheme = _defaultsDeep({
  color: {
    background: {
      page: '#0D1821',
      dark: '#0D1821',
      light: '#F0F4EF',
    },
    error: {
      main: '#ED2E7E',
    },
    button: {
      main: '#344966',
      light: '#B9BAC3',
    },
    text: {
      main: '#344966',
      dark: '#F0F4EF',
      medium: '#B9BAC3',
      light: '#0D1821',
    },
    info: {
      main: '#8D9F4F',
      light: '#BFCC94',
    },
  },

  border: {
    color: {
      dark: '#0D1821',
      light: '#d6d8e7',
      error: '#ED2E7E',
    },
  },
} as ThemeType, lightTheme);
