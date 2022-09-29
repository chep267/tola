/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import MenuList from '@module-base/components/MenuList';
import styled from 'styled-components';
import Button from '@module-base/components/Button';
import { Expand } from '@module-base/components/Button/Animation';
import { BorderRadiusCustom, FlexCustom } from '@module-theme/constants/Mixin';

export const Menu = styled.div(({ theme }) => ({
    ...FlexCustom({ flexDirection: 'column', alignItems: 'flex-end' }),
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: theme.zIndex.max,
}));

export const ButtonMenu = styled(Button)(({ theme }) => ({
    ...FlexCustom({ overflow: 'hidden' }),
    ...Expand({ borderRadius: '50%', size: theme.iconSize.large * 2 }),
}));

export const MenuContent = styled(MenuList)(({ theme }) => ({
    ...BorderRadiusCustom(6),
    zIndex: theme.zIndex.max,
}));
