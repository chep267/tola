/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { useContext } from 'react';
import LanguageContext, { LanguageProps } from '@module-language/utils/LanguageContext';

export const useLanguage: () => LanguageProps = () => useContext(LanguageContext);
