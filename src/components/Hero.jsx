import { motion } from "framer-motion";
import { styles } from "../styles";
import { bwmap, worldmap } from "../assets";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[100px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-6x1 mx-auto flex flex-row items-start
          justify-between gap-1`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <h1
              className={`${styles.heroHeadText} uppercase p-2 rounded-xl`}
            >
              {t("hello")}{" "}

            </h1>

            <p
              className={`${styles.heroSubText} mt-2 p-2 rounded-xl`}
            >
              {t("resume")}
            </p>
          </motion.div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
