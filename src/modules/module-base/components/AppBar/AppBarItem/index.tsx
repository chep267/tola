/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import styled from 'styled-components';
import { APP_BAR_WIDTH } from '@module-base/constants/Layout';

const Container = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    width: `${APP_BAR_WIDTH - 10}px`,
    height: `${APP_BAR_WIDTH - 10}px`,
    borderRadius: 8,
    marginTop: 10,
    cursor: 'pointer',
});

function AppBarItem(props: any) {
    const { doSignOut, name = 'app1', className } = props;

    return (
        <Container className={className} role="presentation">
            <span>{name}</span>
        </Container>
    );
}

export default AppBarItem;
