import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { useTranslation } from "react-i18next";
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, field }) => {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      whileHover={{
        scale: 1.2,
        transition: { duration: .8 } 
      }}
      whileTap={{
        scale: 1.2,
        transition: { duration: .2 },
      }}
      className={`xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card ${isExpanded ? 'h-[400px]' : 'h-[280px]'}`}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {t(field)}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="-mt-[10rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('introduction')}</p>
        <h2 className={styles.sectionHeadText}>{t('overview')}</h2>
      </motion.div>

      <motion.p
        style={{textAlign: 'justify'}}
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-5x1 leading-[30px] font-poppins"
      >
        {t('overviewText')}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index} 
            {...service} 
            field={service.field} 
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
