import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import French from "../locales/en.json";
import English from "../locales/es.json";

export const Context = React.createContext();

const userLocale = navigator.language;

let lang;
if (userLocale === "en") {
  lang = English;
} else if (userLocale === "es") {
  lang = French;
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(userLocale);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
    } else if (newLocale === "es") {
      setMessages(French);
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;