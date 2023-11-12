/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * description is in the html.
 */
const websiteUrl = "https://oversonicrobotics.com/projects/robee/";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */

const skillsList = ["Low Level Programming", "Embedded Systems", "Game Development", "And more..."];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Sono appassionato di programmazione in ogni sua forma. Mi piace risolvere problemi e mettermi alla prova.";

const About = () => {
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
          <h2>About Me</h2>
          <p style={{ textAlign: "center", fontSize: "1.2rem", margin: ".8rem" }}>
            Studente di Ingegneria e Scienze Informatiche presso l&apos;Università di Bologna.
            <br></br> Ho lavorato con{" "}
            <a href={websiteUrl} style={{ color: "purple" }}>
              RoBee
            </a>{" "}
            , il primo robot umanoide cognitivo italiano
          </p>
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
          <p style={{ textAlign: "center", fontSize: "1.1rem", margin: ".8rem" }}>{detailOrQuote}</p>
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
        <h2>About Me</h2>
        <p className="large">
          Studente di Ingegneria e Scienze Informatiche presso l&apos;Università di Bologna.
          <br></br> Ho lavorato con{" "}
          <a href={websiteUrl} style={{ color: "purple" }}>
            RoBee
          </a>{" "}
          , il primo robot umanoide cognitivo italiano
        </p>
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
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
