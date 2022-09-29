/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { ReactNode, useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';

// Utils
import LanguageContext, { getDeviceLanguage } from '@module-language/utils/LanguageContext';

interface Props {
    children: ReactNode;
    messages: any;
}

function LanguageProvider({ children, messages }: Props) {
    const [language, setLanguage] = useState<string>(() => {
        const value = getDeviceLanguage();
        // vi_VN | en_UK | en_US | ...
        return value.slice(0, 2);
    });

    useEffect(() => {
        const initLanguage = async () => {
            const locale = await localStorage.getItem('language');
            if (locale && language !== locale) {
                setLanguage(locale);
            }
        };

        initLanguage().then();
    }, []);

    const onChangeLanguage = (value: 'vi' | 'en') => {
        localStorage.setItem('language', value);
        setLanguage(value);
    };

    const store = React.useMemo(
        () => ({
            language,
            messages,
            onChangeLanguage,
        }),
        [language] // eslint-disable-line
    );

    return (
        <LanguageContext.Provider value={store}>
            <IntlProvider locale={language} key={language} messages={messages[language]}>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;
