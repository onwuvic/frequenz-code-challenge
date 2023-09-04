import { Routes as RouterRoutes, Route } from 'react-router-dom';

import { Home } from 'views/Home';
import { NotFound } from 'views/NotFound';

export function Routes() {
  return (
    <RouterRoutes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
}