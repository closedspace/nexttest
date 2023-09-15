import Link from 'next/link'
import {I18Param} from "../../../models/i18";
import {useTranslation} from "@/app/i18n";
import {Footer} from "@/app/[lng]/components";

export default async function Page({params: {lng}}: I18Param) {
    const {t} = await useTranslation(lng)

    return (
        <>
            <h1>
                {t('title')}
            </h1>
            <Link className="underline text-green-600" href={`/${lng}/content`}>
                {t('to-content')}
            </Link>
            <Link className="underline text-red-500" href={`/${lng}/client-content`}>
                {t('to-client-content')}
            </Link>
            <Footer lng={lng}/>
        </>
    );
};