/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { useContext } from 'react';
import ThemeContext, { ThemeProps } from '@module-theme/utils/ThemeContext';

export const useTheme: () => ThemeProps = () => useContext(ThemeContext);
