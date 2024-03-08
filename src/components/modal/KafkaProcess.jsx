import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import kafkaProcess from "../../assets/projects/kafka_architecture.png";

const KafkaProcess = ({ handleClose, isOpen }) => {
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
        // Contenedor principal del modal
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
            zIndex: "1000",
          }}
        >
          {/* Contenido del modal */}
          <motion.div
            className="modal-content justify-items-center"
            initial={{ y: "-50%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-50%", opacity: 0 }}
            style={{
              width: "70%",
              height: "85%",
              background: "black",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
              alignItems: "center",
            }}
          >
            {/* Botón para cerrar el modal */}
            <span className="close cursor-pointer" onClick={handleClose}>
              &times;
            </span>
            {/* Título del modal */}
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
              {t("kafkaMigracion")} {/* Traducción del título */}
            </motion.h2>
            {/* Descripción del modal */}
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
              {t("kafkaMigracionDescription")}{" "}
              {/* Traducción de la descripción */}
            </motion.p>
            {/* Imagen con diseño y animaciones */}
            <motion.div
              style={{
                width: "80%",
                alignItems: "center",
                marginLeft: "10%",
                marginTop: "5%",
              }}
              className="flex flex-wrap justify-center"
            >
              <motion.img
                src={kafkaProcess}
                title="Kafka Migration Process"
                alt="Kafka Architecture"
                className="max-w-50 h-auto rounded-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>

            {/* Div vacío opcional */}
            <motion.div />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default KafkaProcess;
