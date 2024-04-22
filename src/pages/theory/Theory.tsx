import { Link } from 'react-router-dom';

import { GiOpenBook } from 'react-icons/gi';
import { FaRoadCircleCheck } from 'react-icons/fa6';
import { BsFillSignStopFill } from 'react-icons/bs';
import { BsSignStopLightsFill } from 'react-icons/bs';
import { MdOutlineFollowTheSigns } from 'react-icons/md';

import styles from './theory.module.scss';

export const Theory: React.FC = () => {
  return (
    <div className={styles.theory}>
      <div className={styles.theory__title}>Теорія ПДР</div>
      <div className={styles.theory__subtitle}>Теоретичний курс майбутнього водія</div>
      <div className={styles.theory__items}>
        <Link to="#" className={styles.theory__item}>
          <span>
            <GiOpenBook />
          </span>
          <div className={styles.theory__text}>Правила дорожнього руху</div>
        </Link>

        <Link to="#" className={styles.theory__item}>
          <span>
            <BsFillSignStopFill />
          </span>
          <div className={styles.theory__text}>Знаки</div>
        </Link>

        <Link to="#" className={styles.theory__item}>
          <span>
            <FaRoadCircleCheck />
          </span>
          <div className={styles.theory__text}>Дорожня розмітка</div>
        </Link>

        <Link to="#" className={styles.theory__item}>
          <span>
            <MdOutlineFollowTheSigns />
          </span>
          <div className={styles.theory__text}>Регулювальник</div>
        </Link>

        <Link to="#" className={styles.theory__item}>
          <span>
            <BsSignStopLightsFill />
          </span>
          <div className={styles.theory__text}>Світлофор</div>
        </Link>
      </div>
    </div>
  );
};
