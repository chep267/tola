/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';

export const Layout = styled.div(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    backgroundColor: theme.color.background.default,
    width: '100%',
    height: '100%',
}));
