/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { useState } from 'react';
import AppBarItem from '@module-base/components/AppBar/AppBarItem';

// Styles
import { Container, BtnMenu, ListApp, ContainerFake } from './Style';

function AppBarBase(props: any) {
    const { className, appIds = [0, 1, 2, 3, 4] } = props;
    const [visibleAppBar, setVisibleAppBar] = useState(true);

    const toggleAppBar = () => setVisibleAppBar(!visibleAppBar);

    return (
        <>
            <Container className={className} role="presentation" visibleAppBar={visibleAppBar}>
                <BtnMenu onClick={toggleAppBar} title="Menu">
                    M
                </BtnMenu>
                <ListApp>
                    {appIds.map((value) => (
                        <AppBarItem key={value} name={value} />
                    ))}
                </ListApp>
            </Container>
            <ContainerFake visibleAppBar={visibleAppBar} className={className} />
        </>
    );
}

export default AppBarBase;
