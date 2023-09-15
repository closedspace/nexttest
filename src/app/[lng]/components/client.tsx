'use client'

import { FooterBase } from './FooterBase'
import {useTranslation} from "@/app/i18n/client";
import {LanguageCode} from "../../../../models/i18";

export const Footer = ({ lng } : {lng: LanguageCode}) => {
    const { t } = useTranslation(lng, 'footer', {})
    return <FooterBase t={t} lng={lng} />
}