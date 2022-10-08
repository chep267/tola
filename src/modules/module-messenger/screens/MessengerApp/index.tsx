/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import styled from 'styled-components';

// Components
// import MessengerLeft from './comp/MessageLeft';
// import MessengerRight from './comp/MessageRight';
import Header from '@module-base/components/Header';
import SafeLayout from '@module-base/components/SafeLayout';
import AppBar from '@module-base/components/AppBar';
import Body from '@module-base/components/Body';

const MessengerHeader = styled(Header)({
    height: '70px',
    // padding: '0 20px',
    borderBottom: '1px solid #f0f2f5',
});

const MessengerBody = styled(Body)({
    backgroundColor: 'red',
    // height: 'calc(100% - 70px)',
    padding: '70px 0 0 0',
});

function MessengerScreen() {
    return (
        <SafeLayout>
            <MessengerHeader />
            <MessengerBody>
                <AppBar />
            </MessengerBody>
        </SafeLayout>
    );
}

export default MessengerScreen;
