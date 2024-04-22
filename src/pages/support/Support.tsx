import { Link } from 'react-router-dom';

import {
  FaFacebookMessenger,
  FaSquareInstagram,
  FaTelegram,
  FaSquareFacebook
} from 'react-icons/fa6';

import styles from './support.module.scss';

export const Support: React.FC = () => {
  return (
    <div className={styles.support}>
      <div className={styles.support__title}>Соціальні мережі</div>
      <div className={styles.support__subtitle}>Ми готові відповісти на всі ваші запитання</div>
      <div className={styles.support__items}>
        <Link to="#" className={styles.support__item}>
          <span>
            <FaSquareFacebook />
          </span>
          <div className={styles.support__text}>Facebook</div>
        </Link>

        <Link to="#" className={styles.support__item}>
          <span>
            <FaFacebookMessenger />
          </span>
          <div className={styles.support__text}>Messenger</div>
        </Link>

        <Link to="#" className={styles.support__item}>
          <span>
            <FaSquareInstagram />
          </span>
          <div className={styles.support__text}>Instangram</div>
        </Link>

        <Link to="#" className={styles.support__item}>
          <span>
            <FaTelegram />
          </span>
          <div className={styles.support__text}>Telegram</div>
        </Link>
      </div>
    </div>
  );
};
