import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
    enCommon,
    viCommon,
} from "../locales"

i18n
    .use(LanguageDetector) // Use to automatically detect language
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                common: enCommon,
            },
            vi: {
                common: viCommon,
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        debug: true,
        defaultNS: 'common', // Set default namespace for common translations
    });

export default i18n;
