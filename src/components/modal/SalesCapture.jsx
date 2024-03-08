import React, { useState } from "react";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import springboot from "../../assets/tech/springboot.png";
import apollo from "../../assets/tech/apollo.png";
import graphql from "../../assets/tech/graphql.png";
import user from "../../assets/tech/user.png";
import arrow from "../../assets/tech/arrow.png";

const SalesCapture = ({ handleClose, isOpen }) => {
  const { t, i18n } = useTranslation();

  const handleBodyScroll = () => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  React.useEffect(() => {
    handleBodyScroll();
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(8px)",
            zIndex: "1000",
          }}
        >
          <motion.div
            className="modal-content"
            initial={{ y: "-50%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-50%", opacity: 0 }}
            style={{
              width: "70%",
              height: "85%",
              background: "black",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <span className="close cursor-pointer" onClick={handleClose}>
              &times;
            </span>
            <div>
              <motion.h2
                className="mt-8 text-2xl font-bold font-poppins mb-4"
                initial={{ x: "-1%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
              >
                {t('saleCapture')}
              </motion.h2>
              <motion.p
                className="text-base text-justify font-poppins font-normal mb-4 mt-9"
                initial={{ x: "-1%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
              >
                {t('saleCaptureDescription')}
              </motion.p>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center">
              <motion.div
                className="mt-10 gap-20 h-[4rem] bg-black-300 rounded-full flex items-center justify-between"
                initial={{ x: "-1%" }}
                animate={{ x: "0%" }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
              >
                {/* Primera imagen */}
                <motion.img
                  src={user}
                  title="Cliente"
                  alt="Imagen 1"
                  className="w-full h-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                />
                {/* Flecha */}
                <motion.img
                  src={arrow}
                  alt="Flecha"
                  className="w-full h-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                />
                {/* Segunda imagen */}
                <motion.img
                  src={springboot}
                  alt="Imagen 2"
                  className="w-full h-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                />
                {/* Flecha */}
                <motion.img
                  src={arrow}
                  alt="Flecha"
                  className="w-full h-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                />
                {/* Tercera imagen */}
                <motion.img
                  src={apollo}
                  alt="Imagen 3"
                  className="w-full h-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                />
                {/* Flecha */}
                <motion.img
                  src={arrow}
                  alt="Flecha"
                  className="w-full h-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 }}
                />
                {/* Cuarta imagen */}
                <motion.img
                  src={graphql}
                  alt="Imagen 4"
                  className="w-full h-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1 }}
                />
              </motion.div>
              <motion.div
                className=" gap-40 h-[4rem] bg-black-300 rounded-full flex items-center justify-between"
                initial={{ x: "-1%" }}
                animate={{ x: "0%" }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 50,
                }}
              >
                <p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{ color: "white" }}
                >
                  Cliente
                </p>
                <p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  style={{ color: "white" }}
                >
                  SpringBoot Microservice
                </p>
                <p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  style={{ color: "white" }}
                >
                  Apollo federation
                </p>
                <p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1 }}
                  style={{ color: "white" }}
                >
                  GraphQL Core
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default SalesCapture;
