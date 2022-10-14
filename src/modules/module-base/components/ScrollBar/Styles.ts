/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';
import SafeLayout from '@module-base/components/SafeLayout';

export const Layout = styled(SafeLayout)(({ theme }) => ({
    display: 'block',
    overflow: 'auto',
    overflowY: 'auto',
    overflowX: 'hidden',
    overscrollBehavior: 'contain',
}));
