/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import styled from 'styled-components';

// Components
import SafeLayout from '@module-base/components/SafeLayout';
import NF404 from '@module-base/assets/images/404.jpg';

const BaseApp = styled(SafeLayout)({
    borderRadius: 8,
});

export default function NotFoundScreen() {
    return (
        <BaseApp>
            <img src={NF404} width="100%" height="auto" alt="NotFound" />
        </BaseApp>
    );
}
