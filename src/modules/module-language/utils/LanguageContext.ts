/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

export interface LanguageProps {
    language: string;
    messages: object;
    onChangeLanguage?: (value: 'vi' | 'en') => void;
}

export const getDeviceLanguage = () => {
    const deviceLanguage = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
    return `${deviceLanguage || 'vi'}`.slice(0, 2);
};

const initialState = {
    language: getDeviceLanguage(),
    messages: {
        vi: {},
        en: {},
    },
    onChangeLanguage: (value = 'vi') => value,
};

const LanguageContext = React.createContext<LanguageProps>(initialState);
export default LanguageContext;
