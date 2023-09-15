import {LanguageCode} from "../../../models/i18";

export const fallbackLng: LanguageCode = 'en';
export const languages: LanguageCode[] = [fallbackLng, 'de', 'fr'];
export const cookieName = 'i18next';
export const defaultNS = 'translation'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}