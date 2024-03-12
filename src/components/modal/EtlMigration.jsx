import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const EtlMigration = ({ handleClose, isOpen }) => {
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
              
              
            

              {/* Div vacío opcional */}
              <motion.div />
            </motion.div>
          </motion.div>
        )}
      </>
    );
  };
  
  export default EtlMigration;
  