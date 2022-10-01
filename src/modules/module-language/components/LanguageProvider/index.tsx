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
    messages: object;
}

function LanguageProvider({ children, messages }: Props) {
    const [locale, setLocale] = useState<string>(() => {
        const value = getDeviceLanguage();
        // vi_VN | en_UK | en_US | ...
        return value.slice(0, 2);
    });

    useEffect(() => {
        const initLanguage = async () => {
            const lastLocale = await localStorage.getItem('lastLocale');
            if (lastLocale && lastLocale !== locale) {
                setLocale(lastLocale);
            }
        };

        initLanguage().then();
    }, []);

    const toggleLanguage = (value: 'vi' | 'en') => {
        localStorage.setItem('lastLocale', value);
        setLocale(value);
    };

    const store = React.useMemo(
        () => ({
            locale,
            messages,
            toggleLanguage,
        }),
        [locale] // eslint-disable-line
    );

    return (
        <LanguageContext.Provider value={store}>
            <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;
