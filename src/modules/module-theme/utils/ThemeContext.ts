/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

// Const
import { LIGHT_THEME, themes } from '@module-theme/constants';
import React from 'react';

export type ThemeProps = {
    mode: string;
    theme: any;
    toggleTheme: () => void;
};

const initialState = {
    mode: LIGHT_THEME,
    theme: themes[LIGHT_THEME],
    toggleTheme: () => null,
};

const ThemeContext = React.createContext<ThemeProps>(initialState);

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
