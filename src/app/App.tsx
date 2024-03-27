import { PropsWithChildren } from 'react';

import { withProviders } from './providers';
import '../index.scss';

const App: React.FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default withProviders(App);
