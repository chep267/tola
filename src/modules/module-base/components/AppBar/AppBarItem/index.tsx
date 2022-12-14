/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Components
import { AppItem } from '../Style';

function AppBarItem(props: any) {
    const { path, name, className, title } = props;
    const navigate = useNavigate();
    const location = useLocation();

    const isSelected = location.pathname === path;

    const onPressApp = () => {
        if (!isSelected) navigate(path, { replace: true });
    };

    return (
        <AppItem className={className} title={title} onClick={onPressApp} isSelected={isSelected}>
            <h3>{name}</h3>
        </AppItem>
    );
}

export default AppBarItem;
