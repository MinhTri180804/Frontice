const i18nHelper = {
  getLanguageSystemStaff: () => {
    const language = navigator.language;
    const [firstKeyLanguage] = language.split('-');
    return firstKeyLanguage;
  },
};

export { i18nHelper };
