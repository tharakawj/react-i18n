import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import fr from "react-intl/locale-data/fr";

addLocaleData([...en, ...fr]);

const messages = {
  en: {
    title: "@ Welcome to {name}",
    subTitle: "@ To get started, edit {path} and save to reload."
  },
  fr: {
    title: "# Welcome to {name}",
    subTitle: "# To get started, edit {path} and save to reload."
  }
};

// Change `lng` varibale to en, fr and any other locale to see the
// difference in the strings
const lng = "en";

ReactDOM.render(
  <IntlProvider locale={lng} messages={messages[lng]}>
    <App />
  </IntlProvider>,
  document.getElementById("root")
);
registerServiceWorker();
