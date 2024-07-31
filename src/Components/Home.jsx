import React from "react";
import PropTypes from "prop-types";

// @ts-ignore
import image from "../images/homePicture.jpeg";

const Home = ({ name, title }) => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  if (isMobile) {
    return (
      <section id="home" className="min-height">
        <img
          className="background"
          src={image}
          alt=""
          style={{ height: "100%", maxWidth: "100%", objectFit: "cover", opacity: "0.6" }}
        />
        <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "12rem" }}>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              opacity: "0.9",
              width: "15rem",
            }}
          >
            <h1 style={{ fontSize: "5rem" }}>{name}</h1>
            <h2 style={{ fontSize: "1.6rem" }}>{title}</h2>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="home" className="min-height">
      <img
        className="background"
        src={image}
        alt=""
        style={{ maxWidth: "100%", maxHeight: "100%", opacity: "0.6" }}
      />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "25rem" }}>
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            opacity: "0.9",
            width: "25rem",
          }}
        >
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
