import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/components/App/App';

const root = document.getElementById('root')!;

createRoot(root).render(
  <StrictMode>
    <App placesCount={312} />
  </StrictMode>
);
