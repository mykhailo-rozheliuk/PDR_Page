import { BrowserRouter } from 'react-router-dom';

// import { ... } from 'pages';

export const withRouter =
  <T extends React.PropsWithChildren>(Cmp: React.ComponentType<T>) =>
  (props: T): React.ReactElement => {
    return (
      <BrowserRouter>
        <Cmp {...props}>
          {/* <Routes>
            <Route path="/" element={<ExemplePage />} />
            <Route path="*" element={<>404 Not Found</>} />
          </Routes> */}
        </Cmp>
      </BrowserRouter>
    );
  };
