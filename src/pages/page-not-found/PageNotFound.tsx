import React, { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './pageNotFound.module.scss';

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  const goToHomePage = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className={styles.section}>
      <h1 className={styles.error}>404</h1>
      <div className={styles.page}>Ooops!!! The page you are looking for is not found</div>
      <button className={styles.back_home} onClick={goToHomePage}>
        Back to home
      </button>
    </div>
  );
};
