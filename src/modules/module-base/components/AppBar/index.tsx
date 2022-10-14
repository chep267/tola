/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { useContext } from 'react';

// components
import AppBarItem from '@module-base/components/AppBar/AppBarItem';
import { AppBar, ListApp, AppBarCover } from './Style';

// Utils
import UiContext from '@module-base/utils/Ui/UiContext';

const AppIds = [
    {
        key: '1',
        name: 'New Feed',
        path: '/feed',
    },
    {
        key: '2',
        name: 'Messenger',
        path: '/messenger',
    },
    {
        key: '3',
        name: 'Not Found',
        path: '/404',
    },
];

function AppBarBase(props: any) {
    const { className, appIds = AppIds } = props;
    const { appBar } = useContext(UiContext);
    const { visible } = appBar;

    return (
        <AppBarCover visibleAppBar={visible} className={className}>
            <AppBar className={className} visibleAppBar={visible}>
                <ListApp>
                    {appIds.map((app) => (
                        <AppBarItem key={app.key} name={app.key} title={app.name} path={app.path} />
                    ))}
                </ListApp>
            </AppBar>
        </AppBarCover>
    );
}

export default AppBarBase;
