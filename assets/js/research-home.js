const languageButtons = document.querySelectorAll('[data-switch]');
const documentRoot = document.documentElement;

function setLanguage(language) {
  documentRoot.lang = language;
  documentRoot.dataset.langActive = language;
  languageButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.switch === language));
  });
}

let savedLanguage;
try {
  savedLanguage = localStorage.getItem('research-home-language');
} catch {
  // The language can still be switched when browser storage is unavailable.
}

if (savedLanguage === 'en' || savedLanguage === 'zh') {
  setLanguage(savedLanguage);
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const language = button.dataset.switch;
    setLanguage(language);
    try {
      localStorage.setItem('research-home-language', language);
    } catch {
      // The current page already reflects the selected language.
    }
  });
});
