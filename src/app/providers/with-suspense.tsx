import React from 'react';

export const withSuspense =
  <T extends React.PropsWithChildren>(Cmp: React.ComponentType<T>) =>
  (props: T): React.ReactElement => {
    return (
      <React.Suspense fallback={<>Loading...</>}>
        <Cmp {...props} />
      </React.Suspense>
    );
  };
