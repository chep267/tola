/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { emptyObject } from '@module-base/constants/object';
import { CSSObject } from 'styled-components';

export const FlexBase: CSSObject = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
};

export const FlexCustom = (Style: CSSObject = emptyObject) => ({
    ...FlexBase,
    ...Style,
});

export const BorderRadiusCustom = (value: number | string) => ({
    borderRadius: value || 0,
    WebkitBorderTopLeftRadius: value || 0,
    MozBorderRadius: value || 0,
});

export const BorderRadiusTopAndBottomCustom = (top: number | string, bottom: number | string) => ({
    borderTopLeftRadius: top || 0,
    borderTopRightRadius: top || 0,
    borderBottomLeftRadius: bottom || top || 0,
    borderBottomRightRadius: bottom || top || 0,

    WebkitBorderTopLeftRadius: top || 0,
    WebkitBorderTopRightRadius: top || 0,
    WebkitBorderBottomLeftRadius: bottom || top || 0,
    WebkitBorderBottomRightRadius: bottom || top || 0,
});
