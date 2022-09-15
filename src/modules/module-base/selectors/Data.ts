import { deepGet } from '@module-base/utils/deepObject';

const getState = (state: object, path: Array<string>) => deepGet(state, path);

export { getState };
