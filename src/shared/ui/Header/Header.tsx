import { Button, Container } from '@chakra-ui/react';

import cn from 'classnames';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Container className={styles.header__container}>
        <div className={cn(styles.header__title, styles.home_title)}>
          Super <span>PDR</span>
        </div>

        <Button className={styles.button}>Зайти в профіль</Button>
      </Container>
    </div>
  );
};
