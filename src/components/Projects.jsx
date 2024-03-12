import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { useTranslation } from "react-i18next";
import SalesCapture from "../components/modal/SalesCapture.jsx";
import KafkaProcess from "../components/modal/KafkaProcess.jsx";
import EtlMigration from "../components/modal/EtlMigration.jsx";
import Automation from "../components/modal/Automation.jsx";

const Modal = ({ handleClose, isOpen, component }) => {
  let componentRender;

  console.log("component recieved: ", component);

  switch (component) {
    case "SalesCapture":
      componentRender = (
        <SalesCapture handleClose={handleClose} isOpen={isOpen} />
      );
      break;
    case "KafkaProcess":
      componentRender = (
        <KafkaProcess handleClose={handleClose} isOpen={isOpen} />
      );
      break;
    case "EtlMigration":
      componentRender = (
        <EtlMigration handleClose={handleClose} isOpen={isOpen} />
      );
      break;
    case "Automation":
      componentRender = (
        <Automation handleClose={handleClose} isOpen={isOpen} />
      );
      break;
  }

  return <div>{componentRender}</div>;
};

const ProjectCard = ({ id, name, image, index, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative lg:flex-[0.5] flex-[2]
      flex items-center justify-center min-w-[200px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
    >
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"
      ></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-contain rounded-[24px]"
      />
      <div className="flex items-center justify-start pr-[4.5rem]">
        <h3
          className="font-poppins uppercase mr-20px w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20"
        >
          {name}
        </h3>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);
  const { t, i18n } = useTranslation();

  const handleProjectClick = (projectId, component) => {
    setActiveComponent(component);
    setActiveProject(projectId);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setActiveProject(null);
  };

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t("caseStudies")}</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>{t("proyects")}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe font-poppins text-justify text-[18px] max-w-3xl leading-[30px]"
        >
          {t("achievements")}
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[50vh] gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              handleClick={() =>
                handleProjectClick(project.id, project.component)
              }
            />
          ))}
        </div>
      </motion.div>

      <Modal
        handleClose={handleModalClose}
        isOpen={isOpen}
        component={activeComponent}
      />
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
