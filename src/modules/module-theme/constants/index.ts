/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

const LIGHT_COLOR = {
    MAIN_COLOR: '#148EFF',
    BODY_BG: '#fff',
};

const DARK_COLOR = {
    MAIN_COLOR: '#148EFF',
    BODY_BG: '#1B1B1F',
};

const Z_INDEX = {
    lv0: 0,
    lv1: 10,
    lv2: 20,
    lv3: 30,
    lv4: 40,
    lv5: 50,
    lv6: 60,
    lv7: 70,
    lv8: 80,
    lv9: 90,
    lv10: 100,
    cover: 1,
    underMax: 998,
    max: 999,
};

const FONT_SIZE = {
    tiny: '0.6875rem',
    small: '0.8125rem',
    base: '0.9375rem',
    large: '1.125rem',
    huge: '1.5rem',
};

const ICON_SIZE = {
    tiny: 12,
    small: 16,
    medium: 24,
    large: 32,
    normal: 40,
    huge: 48,
};

export const getThemes = (mode: typeof DARK_THEME | typeof LIGHT_THEME) => themes[mode];

export const themes = {
    [LIGHT_THEME]: {
        // Bộ màu cơ bản cung cấp sẵn dùng
        color: {
            text: {
                light: '#f0f2f5',
                default: '#000000',
                placeholder: '#747474',
                custom: '#707070',
                label: '#9a9a9a',
                hint: '#828282',
                // Link Color
                link: LIGHT_COLOR.MAIN_COLOR,
                linkHover: LIGHT_COLOR.MAIN_COLOR,
            },
            background: {
                default: '#f0f2f5',
                gray: '#f0f2f5',
                main: LIGHT_COLOR.MAIN_COLOR,
                bodyBG: LIGHT_COLOR.BODY_BG,
                border: '#e6e7e8',
                button: '#3f51b5',
                mainScreen: '#ffffff', // whiteSmoke
                loading: '#f0f2f5', // lightGray
                quote: '#DCF0FF',
                viewMessSever: '#b5bccc',
                input: '#efefef',
                transparent: '#efefef',
                active: {
                    focus: 'rgba(81,191,245, 0.5)',
                },
            },
            state: {
                // State Color
                stateDefaultColor: '#F4F7FC',
                statePrimaryColor: LIGHT_COLOR.MAIN_COLOR,
                stateSuccessColor: '#00cc52',
                stateInfoColor: '#1c99f8',
                stateWarningColor: '#ffac38',
                stateDangerColor: '#ff0032',
                stateDefault: true,
            },
            icon: {
                base: '#828282',
            },
            button: {
                default: '#038cf5',
            },
        },
        zIndex: Z_INDEX,
        fontSize: FONT_SIZE,
        iconSize: ICON_SIZE,
    },

    [DARK_THEME]: {
        // Bộ màu cơ bản cung cấp sẵn dùng
        color: {
            text: {
                light: '#f0f2f5',
                default: '#000000',
                placeholder: '#747474',
                custom: '#707070',
                label: '#9a9a9a',
                hint: '#828282',
                // Link Color
                link: DARK_COLOR.MAIN_COLOR,
                linkHover: DARK_COLOR.MAIN_COLOR,
            },
            background: {
                default: '#c3c3c3',
                gray: '#f0f2f5',
                main: DARK_COLOR.MAIN_COLOR,
                bodyBG: DARK_COLOR.BODY_BG,
                border: '#e6e7e8',
                button: '#3f51b5',
                mainScreen: '#ffffff', // whiteSmoke
                loading: '#f0f2f5', // lightGray
                quote: '#DCF0FF',
                viewMessSever: '#b5bccc',
                input: '#efefef',
                transparent: '#efefef',
                active: {
                    focus: 'rgba(81,191,245, 0.5)',
                },
            },
            state: {
                // State Color
                stateDefaultColor: '#F4F7FC',
                statePrimaryColor: LIGHT_COLOR.MAIN_COLOR,
                stateSuccessColor: '#00cc52',
                stateInfoColor: '#1c99f8',
                stateWarningColor: '#ffac38',
                stateDangerColor: '#ff0032',
                stateDefault: true,
            },
            icon: {
                base: '#828282',
            },
            button: {
                default: '#038cf5',
            },
        },
        zIndex: Z_INDEX,
        fontSize: FONT_SIZE,
        iconSize: ICON_SIZE,
    },
};
