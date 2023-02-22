import _defaultsDeep from 'lodash/defaultsDeep';

import { lightTheme } from './lightTheme';

export type ThemeType = typeof lightTheme;

export const darkTheme = _defaultsDeep({
  color: {
    background: {
      page: '#0D1821',
      dark: '#1e2e3a',
      light: '#1e2e3a',
    },
    error: {
      main: '#ED2E7E',
    },
    button: {
      main: '#344966',
      light: '#56565c',
    },
    text: {
      main: '#8792a0ed',
      dark: '#F0F4EF',
      medium: '#B9BAC3',
      light: '#B9BAC3',
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
