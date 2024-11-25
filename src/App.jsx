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

const infos = {
  name: "Gioele Bucci",
  email: "gioele.bucci@studio.unibo.it",
  gitHub: "GioeleBucci",
};

const primaryColor = "#4E567E";

const App = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div id="main">
      <Header />
      <Home name={infos.name} title={t("infos.title")} />
      <About />
      <Portfolio />
      <Footer {...infos} primaryColor={primaryColor} />
    </div>
  );
};

export default App;
