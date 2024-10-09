import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
    enLayout,
    enHome,
    enProfile,
    enSettings,
    viLayout,
    viHome,
    viProfile,
    viSettings,
} from "../locales"

i18n
    .use(LanguageDetector) // Use to automatically detect language
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                layout: enLayout,
                home: enHome,
                profile: enProfile,
                settings: enSettings,
            },
            vi: {
                layout: viLayout,
                home: viHome,
                profile: viProfile,
                settings: viSettings,
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        debug: true,
    });

export default i18n;
