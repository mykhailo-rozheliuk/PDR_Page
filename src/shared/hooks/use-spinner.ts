import { useState, useEffect } from 'react';

export const useSpinner = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return { showSpinner };
};
