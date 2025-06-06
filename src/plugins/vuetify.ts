import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import { createVuetify, type ThemeDefinition } from 'vuetify';
import { mdi } from 'vuetify/iconsets/mdi';

import { customIcons } from '@/components/icons/custom-icons.js';

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#6290A7',
    primaryLight: '#B8C7D4',
    primaryWhite: '#F2F5F7',
    secondary: '#6D1A36',
    tertiary: '#152429',
    quaternary: '#916953',
    accent: '#F9E900',
    warning: '#F6AE2D',
    error: '#96031A',
    background: '#dddfeb',
  },
};

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
      custom: customIcons,
    },
  },
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
    },
  },
});
