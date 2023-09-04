import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryCache,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ThemeModeProvider } from 'hooks';

const queryClient = new QueryClient({
  queryCache: new QueryCache({}),
});

export function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeModeProvider>{children}</ThemeModeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
