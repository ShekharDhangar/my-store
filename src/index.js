import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import { makeServer } from './server';
import { ErrorFallback } from './utils/utils';
import { ProductContextProvider } from './store/index.store';
// Call make Server
makeServer();
const queryClient = new QueryClient(); // note: make instance of QueryClient
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
