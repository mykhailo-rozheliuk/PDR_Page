import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import cn from 'classnames';

import { motion, Variants } from 'framer-motion';

import { TiArrowBack } from 'react-icons/ti';
import { MdLockPerson } from 'react-icons/md';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import { MdOutlineLocalPostOffice } from 'react-icons/md';

import styles from './auth.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Spinner } from 'shared/ui';
import { useSpinner } from 'shared/hooks';

export const Auth: React.FC = () => {
  const navigate = useNavigate();

  const { showSpinner } = useSpinner();

  const [selectedTab, setSelectedTab] = useState(0);

  const tabPanelVariants: Variants = {
    hidden: { height: 0 },
    visible: { height: 'auto' }
  };

  return (
    <div className={styles.auth}>
      {showSpinner ? (
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
                <div className={styles.content__icons}>
                  <FaPeopleGroup className={styles.content__icon} />
                </div>

                <div className={styles.content__name}>
                  <span>Р</span>еєстрація
                </div>

                <div className={styles.content__filed}>
                  <IoPersonSharp className={styles.filed_icon} />

                  <input placeholder="Логін" className={styles.content__input} type="text" />
                </div>

                <div className={styles.content__filed}>
                  <MdOutlineLocalPostOffice className={styles.filed_icon} />

                  <input placeholder="Пошта" className={styles.content__input} type="post" />
                </div>

                <div className={styles.content__filed}>
                  <MdLockPerson className={styles.filed_icon} />

                  <input placeholder="Пароль" className={styles.content__input} type="password" />
                </div>

                <button className={styles.content__button}>Реєстрація</button>

                <hr />

                <div className={styles.content__back} onClick={() => navigate('/')}>
                  <span>
                    <TiArrowBack />
                  </span>
                  <p> Повернутися на головну</p>
                </div>
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
                  <IoPersonSharp className={styles.filed_icon} />

                  <input placeholder="Логін" className={styles.content__input} type="text" />
                </div>

                <div className={styles.content__filed}>
                  <MdLockPerson className={styles.filed_icon} />

                  <input placeholder="Пароль" className={styles.content__input} type="password" />
                </div>

                <button className={styles.content__button}>Реєстрація</button>

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
