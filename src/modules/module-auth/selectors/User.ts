/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { getState } from '@module-base/selectors/Data';
import { emptyUser } from '@module-auth/constants/User';
import { stateAuth } from '@module-auth/utils/configs/StoreAuth';

const genUid = () => `uid.${Date.now()}`;

const getMe = (state: object) => getState(state, [stateAuth, 'me']) || emptyUser;

// const getMeId = (state: object) => getState(state, [statePath, 'me', 'meId']) || '';
// const getMeName = (state: object) => getState(state, statePath) || emptyUser.info.name;
const getMeId = (state: object) => getMe(state).meId;
const getMeName = (state: object) => getMe(state).meId.info.name;

export { genUid, getMeId, getMe, getMeName };
