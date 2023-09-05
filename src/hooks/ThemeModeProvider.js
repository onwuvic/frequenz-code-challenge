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
          },
        }}
      >
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
