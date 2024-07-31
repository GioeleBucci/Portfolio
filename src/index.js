import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import global_en from "./translations/en/global.json";
import global_ita from "./translations/it/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next"; // Import the I18nextProvider component

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    it: {
      global: global_ita,
    },
  },
});

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
