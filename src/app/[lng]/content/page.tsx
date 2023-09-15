import Link from 'next/link'
import {I18Param} from "../../../../models/i18";
import {useTranslation} from "@/app/i18n";
import {Footer} from "@/app/[lng]/components";

export default async function Page({ params: { lng } }: I18Param) {
    const { t } = await useTranslation(lng, 'content')

    return (
        <>
            <Link className={'text-blue-400'} href={`/${lng}`}>
                {t('content')}
            </Link>
            <Footer lng={lng}/>
        </>
    );
}