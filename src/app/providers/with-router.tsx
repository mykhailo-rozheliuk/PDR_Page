import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, Main } from 'pages';

import { Layout } from 'shared/ui';

export const withRouter =
  <T extends React.PropsWithChildren>(Cmp: React.ComponentType<T>) =>
  (props: T): React.ReactElement => {
    return (
      <BrowserRouter>
        <Cmp {...props}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/main" element={<Main />} />
            <Route path="*" element={<>Page Not Found</>} />
          </Routes>
        </Cmp>
      </BrowserRouter>
    );
  };
