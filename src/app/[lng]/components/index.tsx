import { FooterBase } from './FooterBase'
import {useTranslation} from "@/app/i18n";
import {LanguageCode} from "../../../../models/i18";

export const Footer = async ({ lng }: {lng: LanguageCode}) => {
    const { t } = await useTranslation(lng, 'footer')
    return <FooterBase t={t} lng={lng} />
}