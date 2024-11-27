import React from "react";
import { useTranslation } from "react-i18next";

import image from "../images/motion-background.jpg";
const imageAltText = "purple and blue abstract background";

const skillsList = ["Low Level Programming", "Software Design", "Simulation/Game Development", "And more..."];

const About = () => {
  const [t, i18n] = useTranslation("global");
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  if (isMobile) {
    return (
      <section className="padding" id="about">
        <img className="background" src={image} alt={imageAltText} />
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h2>{t("about.header")}</h2>
          <p
            dangerouslySetInnerHTML={{ __html: t("about.experience") }}
            style={{ textAlign: "center", fontSize: "1.2rem", margin: ".8rem" }}
          ></p>
          <hr />
          <ul
            style={{
              textAlign: "left",
              columns: 2,
              fontSize: "1rem",
            }}
          >
            {skillsList.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <p style={{ textAlign: "center", fontSize: "1.1rem", margin: ".8rem" }}>
            {t("about.quote")}
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>{t("about.header")}</h2>
        <p className="large" dangerouslySetInnerHTML={{ __html: t("about.experience") }}></p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0", fontSize: "1.3rem" }}>{t("about.quote")}</p>
      </div>
    </section>
  );
};

export default About;
