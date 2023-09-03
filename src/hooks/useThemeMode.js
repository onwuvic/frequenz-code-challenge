import { useContext } from 'react';
import { ThemeModeContext } from './ThemeModeProvider';

export function useThemeMode() {
  const context = useContext(ThemeModeContext);
  if (context === undefined) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return context;
}
