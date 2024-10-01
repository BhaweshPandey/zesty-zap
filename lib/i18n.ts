import { I18n } from 'i18n-js';
import ar from "../i18n/ar.json";
import en from "../i18n/en.json";


const i18n = new I18n();

i18n.translations = {
    en: {
      ...JSON.parse(JSON.stringify(en))
    },
  ar:{
    ...JSON.parse(JSON.stringify(ar))
  }
  };
  

i18n.locale =  "en";

export default i18n;

