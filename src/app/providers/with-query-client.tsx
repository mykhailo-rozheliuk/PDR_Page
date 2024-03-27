import { QueryClientProvider } from 'react-query';
import { queryClient } from 'shared/query-client';

export const withQueryClient =
  <T extends React.PropsWithChildren>(Cmp: React.ComponentType<T>) =>
  (props: T): React.ReactElement => {
    return (
      <QueryClientProvider client={queryClient}>
        <Cmp {...props} />
      </QueryClientProvider>
    );
  };
