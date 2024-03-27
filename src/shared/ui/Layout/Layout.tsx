import { Outlet } from 'react-router-dom';

import { Container } from '@chakra-ui/react';

import styles from './layout.module.scss';

export const Layout: React.FC = () => (
  <Container className={styles.layout}>
    <Outlet />
  </Container>
);
