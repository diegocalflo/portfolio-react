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
          className="modal overflow-y-auto"
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
              width: "65%",
              height: "35%",
              background: "black",
              borderRadius: "20px",
              marginTop: "7%",
              marginBottom: "5%",
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
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default SalesCapture;
