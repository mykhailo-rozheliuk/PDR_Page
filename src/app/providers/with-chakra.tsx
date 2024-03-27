import { ChakraProvider } from '@chakra-ui/react';
import { CHAKRA_THEME } from 'shared/constants';

export const withChakra =
  <T extends React.PropsWithChildren>(Cmp: React.ComponentType<T>) =>
  (props: T): React.ReactElement => (
    <ChakraProvider resetCSS theme={CHAKRA_THEME}>
      <Cmp {...props} />
    </ChakraProvider>
  );
