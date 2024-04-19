import styles from './spinner.module.scss';

export const Spinner: React.FC = () => (
  <div className={styles.loader}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
);
