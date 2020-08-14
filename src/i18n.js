import i18next from 'i18next';
import {i18n} from 'element-react';
import locale_en from 'element-react/src/locale/lang/en';
import locale_jp from 'element-react/src/locale/lang/ja';
import locale_zh_tw from 'element-react/src/locale/lang/zh-CN';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './languages/resources';

let sysLanguage = localStorage.getItem('sysLanguage');
if(!sysLanguage) localStorage.setItem('sysLanguage', 'en_US');


i18next.use(LanguageDetector).init({
  lng: sysLanguage,
  // we init with resources
  resources: resources,
  fallbackLng: 'en_US',
  debug: false,
  // have a com'en'namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false, // we use content as keys
  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },
  react: {
    wait: true
  }
});

//element-react languages
switch(sysLanguage){
  case 'en_US': i18n.use(locale_en); break;
	case 'ja_JP': i18n.use(locale_jp); break;
  case 'zh_TW': i18n.use(locale_zh_tw); break;
  default: break;
}
export default i18next;
