import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            text: { search: "Search" },
        }
    },
    ua: {
        translation: {
            text: { search: "Пошук" },
        }
    }
};
i18n.use(initReactI18next).init({
    resources,
    lng: "ua",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;