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

import React from 'react';

// Const
import { LIGHT_THEME } from 'modules/module-theme/constants';

type Theme = {
    mode: string;
    onChangeTheme?: () => void;
};

const initialState = {
    mode: LIGHT_THEME,
    toggleTheme: () => null,
};

const ThemeContext = React.createContext<Theme>(initialState);

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
