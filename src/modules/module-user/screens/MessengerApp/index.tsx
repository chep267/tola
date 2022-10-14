/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

// Components
import { MessengerContainer, MessengerLeft, MessengerBody, MessengerRight } from './Style';
import './test.css';

function MessengerScreen() {
    return (
        <MessengerContainer>
            <MessengerLeft />
            <MessengerBody />
            <MessengerRight />
        </MessengerContainer>
    );
}

export default MessengerScreen;
