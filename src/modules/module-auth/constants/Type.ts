/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

export interface UserProps {
    uid: string;
    info: {
        email: string;
        name: string;
        password: string;
        contact: string;
        age: string;
        phone: string;
    };
    image: {
        avatar: string;
        background: string;
    };
    type: string;
}

export interface AuthReducerProps {
    account: string;
    pathName: string;
    meId: string;
    user: UserProps;
    image: {
        avatar: string;
        background: string;
    };
}
