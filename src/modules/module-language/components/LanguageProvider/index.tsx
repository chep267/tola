/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author dongntd@bkav.com on 15/08/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React, { ReactNode, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';

// Utils
import LanguageContext, { getDeviceLanguage } from 'modules/module-language/utils/LanguageContext';

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
