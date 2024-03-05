import React, { useState } from 'react'; 
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { useTranslation } from "react-i18next";
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>{t('mySkills')}</p>
        <h2 className={styles.sectionHeadTextLight}>{t('techs')}</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <TechCard key={technology.name} technology={technology} />
        ))}
      </div>
    </>
  );
};

const TechCard = ({ technology }) => {
  const { name, icon } = technology;
  const { t, i18n } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-28 h-28 rounded-full overflow-hidden shadow-md cursor-pointer relative"
    >
      <img src={icon} alt={name} className="w-full h-full object-scale-down" />
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20, duration: 0.5 }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-center py-3"
        >
          {t(name)}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SectionWrapper(Tech, 'skills');
