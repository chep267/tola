/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';
import { FlexBase } from '@module-theme/constants/Mixin';

export const HeaderCover = styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: theme.zIndex.max,
    backgroundColor: '#fff',
}));

export const Header = styled(HeaderCover)({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
});

const Menu = styled.button(({ theme }) => ({
    ...FlexBase,
    position: 'fixed',
    top: 30,
    left: 0,
    width: 30,
    height: 30,
    zIndex: theme.zIndex.max,
    cursor: 'pointer',
    border: 'none',
    borderTopRightRadius: 10,
}));

export const BtnMenu = styled(Menu)`
    @media screen and (max-width: 559px) {
        // 60 + 10 + 480 + 10
        display: none;
    }
`;
