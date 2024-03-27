import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3.6e6,
      refetchOnReconnect: true
    }
  }
});
