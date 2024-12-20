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

  const flagSrc = i18n.language === "en" ? itFlag : enFlag;

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
      <a href="#about">{t("about.header")}</a>
      <a href="#portfolio">{t("portfolio.header")}</a>
      <a href="#footer">{t("contact.header")}</a>
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
          src={flagSrc}
          alt="Flag"
          style={{
            width: "auto",
            height: "22px",
            alignSelf: "right",
            boxShadow: "0 1px 10px rgba(0, 0, 0, 0.3)",
          }}
        />
      </button>
    </div>
  );
};

export default Header;
