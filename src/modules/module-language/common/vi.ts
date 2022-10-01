/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import msgAuth from '@module-auth/common/vi';
import msgError from '@module-error/common/vi';
import msgTheme from '@module-theme/common/vi';

export default {
    ...msgAuth,
    ...msgError,
    ...msgTheme,
};
