import { createTheme } from '@mui/material/styles';
import { Platform } from 'react-native';

// Shared theme values
const themeValues = {
  colors: {
    primary: '#1976d2',
    secondary: '#dc004e',
  },
  typography: {
    fontFamily: Platform.select({
      ios: '-apple-system',
      android: 'Roboto',
      web: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
    }),
  },
};

// Create platform-specific themes
const webTheme = createTheme({
  palette: {
    primary: {
      main: themeValues.colors.primary,
    },
    secondary: {
      main: themeValues.colors.secondary,
    },
  },
  typography: {
    fontFamily: themeValues.typography.fontFamily,
  },
});

const nativeTheme = {
  ...themeValues,
};

export const theme = Platform.OS === 'web' ? webTheme : nativeTheme;
