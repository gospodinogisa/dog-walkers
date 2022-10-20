import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./translations/en.json";
import sr from "./translations/sr.json";

const resources = {
    "EN": en,
    "SR": sr,
  }
  
  export const availableLanguages = Object.keys(resources)

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: resources,
        ns: ["en", "sr", "common"],
        defaultNS: "common",
        fallbackLng: "EN"
    })