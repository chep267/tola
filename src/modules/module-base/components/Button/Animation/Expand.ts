/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { BorderRadiusCustom } from '@module-theme/constants/Mixin';
import { CSSObject } from 'styled-components';

const Expand: ({
    color,
    colorChange,
    borderRadius,
    size,
}: {
    color?: string;
    colorChange?: string;
    borderRadius?: number | string;
    size?: number;
}) => CSSObject = ({ color = '#2d2c3e', colorChange = '#f0f2f5', borderRadius = '50%', size = 40 }) => ({
    ...BorderRadiusCustom(borderRadius),
    width: size,
    height: size,

    // ':after': {
    //     content: '""',
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     height: '100%',
    //     width: '100%',
    //     transition: 'all 0.35s ease',
    //     ...BorderRadiusCustom(borderRadius),
    //     boxShadow: `inset 0 0 0 0px ${color}`,
    //     // boxShadow: `inset 0 0 0 0px red`,
    // },

    ':before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition: 'all 0.35s ease',
        ...BorderRadiusCustom(borderRadius),
        boxShadow: `inset 0 0 0 ${size}px ${colorChange}`,
    },

    ':hover': {
        ':before': {
            boxShadow: `inset 0 0 0 0 ${color}`,
        },
    },
});

export default Expand;
