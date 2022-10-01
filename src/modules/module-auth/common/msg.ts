/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { defineMessages } from 'react-intl';

// const getMSG = (obj) => {
//     const data = {};
//     Object.entries(obj).forEach((value) => {
//         let key = value[0].split('.');
//         key = key[key.length - 1];
//         data[key] = value[1];
//     });
//     return data;
// };

export default defineMessages({
    placeholderAccount: {
        id: 'module.auth.placeholder.account',
        defaultMessage: 'Nhập tài khoản',
    },
    placeholderPassword: {
        id: 'module.auth.placeholder.password',
        defaultMessage: 'Nhập mật khẩu',
    },
    titleLogin: {
        id: 'module.auth.title.login',
        defaultMessage: 'Đăng nhập',
    },
    password: {
        id: 'module.auth.password',
        defaultMessage: 'Mật khẩu',
    },
    lang: {
        id: 'module.language.lang',
        defaultMessage: 'Ngôn ngữ',
    },
    vi: {
        id: 'module.lang.vi',
        defaultMessage: 'Tiếng Việt',
    },
    en: {
        id: 'module.lang.en',
        defaultMessage: 'English',
    },
    theme: {
        id: 'module.theme.theme',
        defaultMessage: 'Giao diện',
    },
    light: {
        id: 'module.theme.light',
        defaultMessage: 'Sáng',
    },
    dark: {
        id: 'module.theme.dark',
        defaultMessage: 'Tối',
    },
});
