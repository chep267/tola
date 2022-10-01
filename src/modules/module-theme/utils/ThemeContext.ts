/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

// Const
import { LIGHT_THEME } from '@module-theme/constants';

export type ThemeProps = {
    mode: string;
    toggleTheme: () => void;
};

const initialState = {
    mode: LIGHT_THEME,
    toggleTheme: () => null,
};

const ThemeContext = React.createContext<ThemeProps>(initialState);

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
