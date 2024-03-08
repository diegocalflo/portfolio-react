import React, { useState } from 'react'; 
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { useTranslation } from "react-i18next";
import { technologies } from '../constants';
import { styles } from '../styles';
import { fadeIn, slideIn, textVariant } from '../utils/motion';


const Tech = () => {
    const { t, i18n } = useTranslation();

    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubTextLight}>{t('mySkills')}</p>
          <h2 className={styles.sectionHeadTextLight}>{t('softSkillsTitle')}</h2>
        </motion.div>
  
      </>
    );

};

export default SectionWrapper(Tech, 'softSkills');