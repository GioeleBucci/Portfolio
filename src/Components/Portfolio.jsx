/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

import image from "../images/laptop.jpg";

const imageAltText = "desktop with laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Il mio GitHub",
    description:
      "GitHub è una piattaforma collaborativa che ospita software open-source. Questo è il mio profilo, contenente i principali progetti a cui ho lavorato.",
    url: "https://github.com/GioeleBucci",
  },
  {
    title: "Sorgente di questo sito",
    description:
      "Questa pagina è stata realizzata con JavaScript + React, un framework per la creazione di interfacce utente.",
    url: "https://github.com/GioeleBucci/Portfolio",
  },
  {
    title: 'TBOOOP! Un demake di "The Binding of Isaac"',
    description:
      "Un videogioco realizzato per il corso di programmazione ad oggetti (A.A. 2023/24).",
    url: "https://github.com/GioeleBucci/OOP23-TBOOOP",
  },
];

const Portfolio = () => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

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
