/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 27/06/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React, { ReactNode, useEffect, useRef, useState } from 'react';

// Themes
import ThemeContext from '@module-theme/utils/ThemeContext';

// Utils
import localStorage from '@module-base/utils/localStorage';
import { DARK_THEME, LIGHT_THEME } from '@module-theme/constants';

/**
 * Note: Dam bao cau hinh themes lay tu server duoc tra va truoc khi mount component nay ra.
 * Component nay khong ho tro update theme de dam bao van de hieu nang.
 */

type Props = {
    children: ReactNode;
};

function ThemeProvider({ children }: Props) {
    const modeRef = useRef(localStorage.get('theme')).current || 'os-default';
    const [mode, setMode] = useState(modeRef);

    useEffect(() => {
        if (modeRef === 'os-default') {
            const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const _mode = isOsDark ? DARK_THEME : LIGHT_THEME;
            setMode(_mode);
            document.documentElement.setAttribute('data-theme', _mode);
            return;
        }

        document.documentElement.setAttribute('data-theme', mode);
    }, []);

    useEffect(() => {
        const onSystemThemeChange = (e: MediaQueryListEvent) => {
            if (localStorage.get('theme')) {
                return;
            }
            const isOsDark = e.matches;
            const _mode = isOsDark ? DARK_THEME : LIGHT_THEME;
            document.documentElement.setAttribute('data-theme', _mode);
        };

        const matchMediaPrefDark = window.matchMedia('(prefers-color-scheme: dark)');

        matchMediaPrefDark.addEventListener('change', onSystemThemeChange);

        return () => {
            matchMediaPrefDark.removeEventListener('change', onSystemThemeChange);
        };
    }, []);

    const toggleTheme = () => {
        const _mode = mode === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
        document.documentElement.setAttribute('data-theme', _mode);
        localStorage.set('theme', _mode);
        setMode(_mode);
    };

    const store = React.useMemo(
        () => ({
            mode,
            toggleTheme,
        }),
        [mode]
    );

    return <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
