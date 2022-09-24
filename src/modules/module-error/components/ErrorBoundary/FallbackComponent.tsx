/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { useCallback, useState } from 'react';

// Component
import SafeLayout from '@module-base/components/SafeLayout';
import { useIntl } from 'react-intl';

// Style
import { FallBack, Retry } from './Styles';

// Util
import msg from '@module-error/common/msg';

export default function FallbackComponent({ isAutoReload }: { isAutoReload: boolean }) {
    const intl = useIntl();
    const [second, setSecond] = useState(100);

    React.useEffect(() => {
        const timeOut = setInterval(() => {
            setSecond((s) => s - 1);
        }, 1000);

        if (second === 0) reloadWindow();

        return function cleanup() {
            clearTimeout(timeOut);
        };
    }, [second]);

    const reloadWindow = useCallback(() => {
        localStorage.clear();
        window.location.reload();
    }, []);

    return (
        <SafeLayout>
            <FallBack>
                <img src={require('@module-base/assets/images/404.jpg')} alt="err" />
                <h1>{intl.formatMessage(msg.fallbackTitle)}</h1>
                <h2>{intl.formatMessage(msg.fallbackContent)}</h2>
                <Retry onPress={reloadWindow} text={intl.formatMessage(msg.retry)} />
                {isAutoReload && <p>{intl.formatMessage(msg.autoReload, { value: second })}</p>}
            </FallBack>
        </SafeLayout>
    );
}
