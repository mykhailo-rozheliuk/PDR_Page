import { Container } from '@chakra-ui/react';

import cn from 'classnames';

import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Container className={styles.footer__container}>
        <div className={styles.footer__title}>
          Super <span>PDR</span>
        </div>

        <div className={styles.footer__text}>2022-2024г. pdd-drive.</div>
      </Container>
    </div>
  );
};
