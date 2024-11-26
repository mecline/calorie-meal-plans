import { createTheme } from '@mui/material/styles';
import { Platform } from 'react-native';

const baseTheme = {
  colors: {
    primary: '#1976d2',
    secondary: '#dc004e',
    background: '#ffffff',
    text: '#000000',
  },
  spacing: {
    unit: 8,
  },
};

// Web-specific theme using MUI
const webTheme = createTheme({
  palette: {
    primary: {
      main: baseTheme.colors.primary,
    },
    secondary: {
      main: baseTheme.colors.secondary,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

// Native-specific theme
const nativeTheme = {
  colors: baseTheme.colors,
  spacing: baseTheme.spacing,
  typography: {
    fontFamily: Platform.select({
      ios: '-apple-system',
      android: 'Roboto',
      default: 'System',
    }),
  },
};

export default Platform.OS === 'web' ? webTheme : nativeTheme;
