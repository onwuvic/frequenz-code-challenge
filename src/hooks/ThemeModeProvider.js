import { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'utils/theme';

const INIT_STATE = { toggleThemeMode: () => {} };

export const ThemeModeContext = createContext(INIT_STATE);

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState('light');

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider
        theme={{
          ...theme,
          palette: {
            ...theme.palette,
            mode,
            ...(mode === 'dark' && {
              // primary: amber,
              divider: 'rgba(255, 255, 255, 0.12)',
              text: {
                primary: '#fff',
                secondary: 'rgba(255, 255, 255, 0.7)',
                disabled: 'rgba(255, 255, 255, 0.5)',
              },
              action: {
                active: '#fff',
                hover: 'rgba(255, 255, 255, 0.08)',
                selected: 'rgba(255, 255, 255, 0.16)',
                disabled: 'rgba(255, 255, 255, 0.3)',
                disabledBackground: 'rgba(255, 255, 255, 0.12)',
              },
              background: {
                default: '#121212',
                paper: '#333',
              },
            }),
          },
        }}
      >
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
