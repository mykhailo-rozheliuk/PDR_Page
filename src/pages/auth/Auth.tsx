import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import cn from 'classnames';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { motion, Variants } from 'framer-motion';

import { TiArrowBack } from 'react-icons/ti';
import { MdLockPerson } from 'react-icons/md';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import { MdOutlineLocalPostOffice } from 'react-icons/md';

import { Spinner } from 'shared/ui';
import { useSpinner } from 'shared/hooks';

import { RegisterInterface } from './interfaces.ts';

import { registerSchema } from './schema.ts';

import styles from './auth.module.scss';

export const Auth: React.FC = () => {
  const navigate = useNavigate();

  const { showSpinner } = useSpinner();

  const [selectedTab, setSelectedTab] = useState(0);

  const [isRegistered, setIsRegistered] = useState(false);

  const [isRedirecting, setIsRedirecting] = useState(false);

  const tabPanelVariants: Variants = {
    hidden: { height: 0 },
    visible: { height: 'auto' }
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<RegisterInterface>({
    resolver: yupResolver(registerSchema)
  });

  const submitForm = (data: RegisterInterface) => {
    console.log({ data });
    setIsRegistered(true);
    reset();
  };

  useEffect(() => {
    if (isRegistered) {
      setIsRedirecting(true);
      const timer = setTimeout(() => {
        setIsRedirecting(false);
        navigate('/main');
      }, 3000); // 3 секунди до перенаправлення

      return () => clearTimeout(timer);
    }
  }, [isRegistered, navigate]);

  return (
    <div className={styles.auth}>
      {showSpinner || isRedirecting ? (
        <Spinner />
      ) : (
        <Tabs>
          <TabList className={styles.auth__container}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedTab(0)}
            >
              <Tab className={styles.auth__button}>Реєстрація</Tab>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedTab(1)}
            >
              <Tab className={styles.auth__button}>Вхід</Tab>
            </motion.div>
          </TabList>

          <TabPanels className={cn(styles.auth__content, styles.content)}>
            <TabPanel className={styles.content__wrap}>
              <motion.div
                variants={tabPanelVariants}
                initial="hidden"
                animate={selectedTab === 0 ? 'visible' : 'hidden'}
                transition={{ duration: 0.7 }}
              >
                <form onSubmit={handleSubmit(submitForm)}>
                  <div className={styles.content__icons}>
                    <FaPeopleGroup className={styles.content__icon} />
                  </div>

                  <div className={styles.content__name}>
                    <span>Р</span>еєстрація
                  </div>

                  <div className={styles.content__filed}>
                    <div className={styles.content__filedWrap}>
                      <IoPersonSharp className={styles.filed_icon} />

                      <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            placeholder="Імя"
                            className={`${styles.content__input} ${errors.username ? styles.inputError : ''}`}
                            autoComplete="username"
                          />
                        )}
                      />
                    </div>
                    <p className={styles.error}>{errors.username?.message}</p>
                  </div>

                  <div className={styles.content__filed}>
                    <div className={styles.content__filedWrap}>
                      <MdOutlineLocalPostOffice className={styles.filed_icon} />

                      <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="email"
                            placeholder="Введіть email"
                            className={`${styles.content__input} ${errors.email ? styles.inputError : ''}`}
                            autoComplete="email"
                          />
                        )}
                      />
                    </div>
                    <p className={styles.error}>{errors.email?.message}</p>
                  </div>

                  <div className={styles.content__filed}>
                    <div className={styles.content__filedWrap}>
                      <MdLockPerson className={styles.filed_icon} />

                      <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="password"
                            placeholder=" Введіть пароль"
                            className={`${styles.content__input} ${errors.password ? styles.inputError : ''}`}
                            autoComplete="password"
                          />
                        )}
                      />
                    </div>
                    <p className={styles.error}>{errors.password?.message}</p>
                  </div>

                  <div className={styles.content__filed}>
                    <div className={styles.content__filedWrap}>
                      <MdLockPerson className={styles.filed_icon} />

                      <Controller
                        name="confirmPassword"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            type="password"
                            placeholder=" Підтвердіть пароль"
                            className={`${styles.content__input} ${errors.confirmPassword ? styles.inputError : ''}`}
                            autoComplete="new-password"
                          />
                        )}
                      />
                    </div>
                    <p className={styles.error}>{errors.confirmPassword?.message}</p>
                  </div>

                  <button className={styles.content__button}>Реєстрація</button>

                  {isRegistered && (
                    <div className={styles.successMessage}>Ви успішно зареєстровані!</div>
                  )}

                  <hr />

                  <div className={styles.content__back} onClick={() => navigate('/')}>
                    <span>
                      <TiArrowBack />
                    </span>
                    <p> Повернутися на головну</p>
                  </div>
                </form>
              </motion.div>
            </TabPanel>

            <TabPanel className={styles.content__wrap}>
              <motion.div
                variants={tabPanelVariants}
                initial="hidden"
                animate={selectedTab === 1 ? 'visible' : 'hidden'}
                transition={{ duration: 0.7 }}
              >
                <div className={styles.content__icons}>
                  <FaPeopleGroup className={styles.content__icon} />
                </div>

                <div className={styles.content__name}>
                  <span>В</span>хід
                </div>

                <div className={styles.content__filed}>
                  <div className={styles.content__filedWrap}>
                    <MdOutlineLocalPostOffice className={styles.filed_icon} />

                    <input
                      type="text"
                      placeholder="Введіть email"
                      className={styles.content__input}
                      autoComplete="username"
                    />
                  </div>
                </div>

                <div className={styles.content__filed}>
                  <div className={styles.content__filedWrap}>
                    <MdLockPerson className={styles.filed_icon} />

                    <input
                      type="password"
                      placeholder=" Введіть пароль"
                      className={styles.content__input}
                      autoComplete="current-password"
                    />
                  </div>
                </div>

                <button className={styles.content__button}>Вхід</button>

                <hr />

                <div className={styles.content__back} onClick={() => navigate('/')}>
                  <span>
                    <TiArrowBack />
                  </span>
                  <p> Повернутися на головну</p>
                </div>
              </motion.div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </div>
  );
};
