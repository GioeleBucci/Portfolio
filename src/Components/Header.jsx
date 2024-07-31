import React from "react";
import { useTranslation } from "react-i18next";

import enFlag from "../images/flags/en.svg";
import itFlag from "../images/flags/it.svg";

const Header = () => {
  const [t, i18n] = useTranslation("global");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleFlagClick = () => {
    changeLanguage(i18n.language === "en" ? "it" : "en");
  };

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(13px)",
        WebkitBackdropFilter: "blur(13px)",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      {/* <a href="#home">Home</a> */}
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
        onClick={handleFlagClick}
      >
        <img
          src={enFlag}
          alt="Flag"
          style={{
            width: "auto",
            height: "24px",
            alignSelf: "right",
          }}
        />
      </button>
    </div>
  );
};

export default Header;
