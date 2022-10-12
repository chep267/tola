/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import styled from 'styled-components';

// Components
import Header from '@module-base/components/Header';
import SafeLayout from '@module-base/components/SafeLayout';
import AppBar from '@module-base/components/AppBar';
import { APP_BAR_WIDTH, BODY_PADDING, HEADER_HEIGHT, HEADER_PADDING } from '@module-base/constants/Layout';

const BaseContainer = styled(SafeLayout)({
    height: '100vh',
    flexDirection: 'column',
    minHeight: 700,
    minWidth: 480,
});

const BaseHeader = styled(Header)(({ theme }) => ({
    // width: `calc(100% - ${2 * HEADER_PADDING + APP_BAR_WIDTH}px)`,
    height: `${HEADER_HEIGHT}px`,
    maxHeight: `${HEADER_HEIGHT}px`,
    minHeight: `${HEADER_HEIGHT}px`,
    padding: `0 ${HEADER_PADDING}px 0 ${HEADER_PADDING + APP_BAR_WIDTH}px`,
    borderBottom: '1px solid #f0f2f5',
    zIndex: theme.zIndex.underMax,
}));

const BaseBody = styled(SafeLayout)({
    padding: BODY_PADDING,
    width: `calc(100% - ${2 * BODY_PADDING}px)`,
    height: `calc(100% - ${2 * BODY_PADDING}px)`,
});

const BaseApp = styled(SafeLayout)({
    backgroundColor: 'gray',
    borderRadius: 8,
});

function BaseScreen() {
    return (
        <BaseContainer>
            <BaseHeader />
            <SafeLayout>
                <AppBar />
                <BaseBody>
                    <BaseApp />
                </BaseBody>
            </SafeLayout>
        </BaseContainer>
    );
}

export default BaseScreen;
