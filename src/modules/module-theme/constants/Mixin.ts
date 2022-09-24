/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { CSSObject } from 'styled-components';

export const FlexBase: CSSObject = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
};

export const FlexCustom = (Style: CSSObject) => ({
    ...FlexBase,
    ...Style,
});

export const BorderRadiusCustom = (value: number | string) => ({
    borderRadius: value,
    WebkitBorderTopLeftRadius: value,
    MozBorderRadius: value,
});

export const BorderRadiusTopAndBottomCustom = (top: number | string, bottom: number | string) => ({
    borderTopLeftRadius: top,
    borderTopRightRadius: top,
    borderBottomLeftRadius: bottom || top,
    borderBottomRightRadius: bottom || top,

    WebkitBorderTopLeftRadius: top,
    WebkitBorderTopRightRadius: top,
    WebkitBorderBottomLeftRadius: bottom || top,
    WebkitBorderBottomRightRadius: bottom || top,
});
