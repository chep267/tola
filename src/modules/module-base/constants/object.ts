import AVATAR_DEFAULT from '../assets/images/avatar.png';
import BACKGROUND_DEFAULT from '../assets/images/background.jpg';

const emptyFunction = () => null;
const comparePure =
    (type = 'pure', ...arr: any) =>
    (prev: object, next: object) => {
        if (type !== 'pure') {
            for (const key of arr) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if (prev[key] === next[key]) {
                    return false;
                }
            }
        }
        return true;
    };
const emptyObject = {};
const emptyArray = [] as any;
const REG_EMAIL = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
const REG_PHONE = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/);

export { REG_EMAIL, REG_PHONE, emptyFunction, emptyObject, emptyArray, AVATAR_DEFAULT, BACKGROUND_DEFAULT, comparePure };
