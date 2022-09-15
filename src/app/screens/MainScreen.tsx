/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// action
import { SIGN_IN_ACTION } from '@module-auth/actions/SignIn';

// screen
import AppRouter from './AppRouter';
import LoadingScreen from '@module-base/screens/Loading';

// utils
import { TIME_LOADING_APP } from '@app/constants';

type Props = {
    doStartApp: (onStartSuccess: () => void) => void;
};

let TimeOut: NodeJS.Timeout;
function MainScreen({ doStartApp }: Props) {
    const [timer, setTimer] = useState(true);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const onStartSuccess = () => setLoading(false);

        TimeOut = setTimeout(() => {
            setTimer(false);
        }, TIME_LOADING_APP);
        doStartApp(onStartSuccess);

        return () => {
            clearTimeout(TimeOut);
        };
    }, []);

    if (timer || isLoading) return <LoadingScreen />;
    return <AppRouter />;
}

function mapDispatchToProps(dispatch: any) {
    return {
        doStartApp: (onSuccess: () => void) => {
            dispatch({ type: SIGN_IN_ACTION.START_APP.REQUEST, payload: { onSuccess } });
        },
    };
}

export default connect(null, mapDispatchToProps)(MainScreen);
