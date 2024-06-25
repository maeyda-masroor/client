import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import French from "./locales/en.json";
import English from "./locales/es.json";
import Wrapper from "./pages/ContextWrapper";

const userLocale = navigator.language;

let lang;
if (userLocale === "en") {
  lang = English;
} else if (userLocale === "es") {
  lang = French;
}

ReactDOM.render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById("root")
);
