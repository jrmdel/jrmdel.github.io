const supportedLanguages = ['en', 'fr'];

function getNavigatorLanguage() {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return navigator.language || 'en';
  }
}

export function getDefaultLanguage() {
  const language = getNavigatorLanguage();
  console.log('Detected browser language:', language);
  return supportedLanguages.includes(language) ? language : 'en';
}

export function isSupportedLanguage(language: string | null | undefined): language is string {
  if (!language) {
    return false;
  }
  const lang = language.split('-')[0];
  return supportedLanguages.includes(lang);
}
