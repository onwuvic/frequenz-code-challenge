import { createTheme } from '@mui/material/styles';

export const darkGray = '#263746';
export const charcoal = '#161E29';
export const brightBlue = '#3A8DD3';
export const green = '#29CC9A';
export const purple = '#5F2BE1';
export const coral = '#E46868';
export const background = '#F3F8FD';
export const lightGray = '#A3BCC3';

export const theme = createTheme({
  palette: {
    common: {
      charcoal,
      lightGray,
    },
    primary: {
      main: brightBlue,
    },
    secondary: {
      main: purple,
    },
    error: {
      main: coral,
    },
    success: {
      main: green,
    },
    text: {
      primary: darkGray,
    },
    background: {
      default: background,
    },
  },
});