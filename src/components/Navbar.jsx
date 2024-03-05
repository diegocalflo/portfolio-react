import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu } from "../assets";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("es");

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const switchVariants = {
    checked: {
      backgroundColor: "#333",
      x: "22px"
    },
    unchecked: {
      backgroundColor: "#ccc",
      x: "0px" 
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}
    >
      <div className="w-full flex justify-between items-center max-w-7x2 mx-auto">
        <Link
          to="/"
          className="flex items-center text-black text-3xl font-bold"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <h2 className="text-lg font-poppins">{t("title")}</h2>{" "}
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-french" : "text-eerieBlack"
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{t(nav.id)}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? "menu-open" : "menu-close"
                }`}
            >
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]"
              >
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-french" : "text-eerieBlack"
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{t(nav.id)}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
        <motion.div className="ml-6 items-center">
          {/* Botones de idioma con clases y estilos */}
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={toggleLanguage}
              checked={currentLanguage === "es"}
            />
            <motion.div
              className={`relative border-black w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4  rounded-full peer `}
              variants={switchVariants}
              animate={currentLanguage === "es" ? "checked" : "unchecked"} 
            >
              <span
                className={`absolute start-3 text-sm font-medium ${
                  currentLanguage === "es"
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                {currentLanguage === "es" ? "ES" : "EN"}
              </span>
            </motion.div>
          </label>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
