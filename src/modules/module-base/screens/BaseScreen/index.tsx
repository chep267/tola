/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

// Components
import AppBar from '@module-base/components/AppBar';
import { BaseContainer, BaseBody, BaseHeader, Screen } from './Styles';

function BaseScreen(props: any) {
    const { element } = props;

    return (
        <BaseContainer>
            <BaseHeader />
            <BaseBody>
                <AppBar />
                <Screen>{element}</Screen>
            </BaseBody>
        </BaseContainer>
    );
}

export default BaseScreen;
