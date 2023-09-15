'use client'

import Link from 'next/link'
import { useTranslation } from '../../i18n/client'
import { useState } from 'react'
import {Footer} from "@/app/[lng]/components/client";
import {I18Param} from "../../../../models/i18";

export default function Page({ params: { lng } }: I18Param) {
    const { t } = useTranslation(lng, 'content-client', {})
    const [counter, setCounter] = useState(0)
    return (
        <>
            <h1>{t('title')}</h1>
            <p>{t('counter', { count: counter })}</p>
            <div>
                <button className="border-2 bg-purple-600 p-1 m-4 text-white" onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
                <button className="border-2 bg-purple-600 p-1 m-4 text-white" onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
            </div>
            <h4>
                {counter}
            </h4>
            <Link href={`/${lng}`}>
                <button type="button">
                    {t('back-to-home')}
                </button>
            </Link>
            <Footer lng={lng} />
        </>
    )
}