/**
 * @author
 */

import {useEffect, useState} from 'react';

// Language
import msgVI from './msg/vi';
import msgEN from './msg/en';

const LANG = {
    VIETNAMESE: 'vi',
    ENGLISH: 'en',
};


function useLanguage() {
    const [lang, setLang] = useState(() => window.localStorage.getItem('language') || 'vi');

    useEffect(() => {
        const listener = () => {
            const language = window.localStorage.getItem('language');
            if (language && language !== lang) {
                setLang(language);
            }
        };
        window.addEventListener('storage', listener);
        return () => {
            window.removeEventListener('storage', listener);
        };
    }, [lang]);

    const onChangeLang = (newLang: string) => {
        if (newLang !== lang) {
            window.localStorage.setItem('language', newLang);
            window.dispatchEvent(new Event('storage'));
        }
    };

    return [lang === LANG.VIETNAMESE ? msgVI : msgEN, lang, onChangeLang];
}

export {useLanguage, LANG};
