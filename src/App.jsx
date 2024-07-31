/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import { useTranslation } from "react-i18next";

import "./styles.css";

const siteProps = {
  name: "Gioele Bucci",
  title: "Ingegnere Informatico (work in progress)",
  email: "gioelebucci@gmail.com",
  gitHub: "GioeleBucci",
};

const primaryColor = "#4E567E";
const secondaryColor = "#27b87b";

const App = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={t("header.message")} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
