import { ThemeModeProvider } from 'hooks';

export function AppProviders({ children }) {
  return (
    <ThemeModeProvider>
      {children}
    </ThemeModeProvider>
  );
}
