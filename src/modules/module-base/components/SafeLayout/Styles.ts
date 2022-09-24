/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';
import { FlexCustom } from '@module-theme/constants/Mixin';

export const Layout = styled.div(({ theme }) => ({
    ...FlexCustom({ backgroundColor: theme.color.background.gray }),
    width: '100%',
    height: '100vh',
    minHeight: 500,
}));
