import React from "react";

import image from "../images/laptop.jpg";
import { useTranslation } from "react-i18next";
const imageAltText = "desktop with laptop";

const Portfolio = () => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const [t, i18n] = useTranslation("global");

  const projectList = [
    {
      title: t("portfolio.github.title"),
      description: t("portfolio.github.description"),
      url: "https://github.com/GioeleBucci",
    },
    {
      title: t("portfolio.website.title"),
      description: t("portfolio.website.description"),
      url: "https://github.com/GioeleBucci/Portfolio",
    },
    {
      title: t("portfolio.tbooop.title"),
      description: t("portfolio.tbooop.description"),
      url: "https://github.com/GioeleBucci/OOP23-TBOOOP",
    },
    {
      title: t("portfolio.risikodb.title"),
      description: t("portfolio.risikodb.description"),
      url: "https://github.com/GioeleBucci/Risiko-DB",
    },
  ];

  if (isMobile) {
    return (
      <section className="padding" id="portfolio">
        <h2 style={{ textAlign: "center" }}>Portfolio</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ maxWidth: "40%", alignSelf: "center" }}></div>
          <div className="container">
            <div
              className="container"
              style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
            >
              {projectList.map((project) => (
                <div
                  className="project"
                  key={project.title}
                  style={{ maxWidth: "300px", alignContent: "center" }}
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <h5 style={{ flexBasis: "48px", color: "indigo", fontSize: "16px" }}>
                      {project.title}
                    </h5>
                  </a>
                  <p className="small" style={{ fontSize: "14px" }}>
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px", color: "indigo" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
