/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import messages from '@module-language/common/msg';

export interface LanguageProps {
    locale: string;
    messages: object;
    toggleLanguage: (value: 'vi' | 'en') => void;
}

export const getDeviceLanguage = () => {
    const deviceLanguage = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
    return `${deviceLanguage || 'vi'}`.slice(0, 2);
};

const initialState = {
    locale: getDeviceLanguage(),
    messages,
    toggleLanguage: (value = 'vi') => value,
};

const LanguageContext = React.createContext<LanguageProps>(initialState);
export default LanguageContext;
