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

// Component
import ErrorBoundary from '@modules/module-error/components/ErrorBoundary';

// utils
import { TIME_LOADING_APP } from '@app/constants';

type Props = {
    doStartApp: (onStartSuccess: () => void) => void;
};

function MainScreen({ doStartApp }: Props) {
    const [timer, setTimer] = useState(true);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const onStartSuccess = () => setLoading(false);

        const TimeOut: NodeJS.Timeout = setTimeout(() => {
            setTimer(false);
        }, TIME_LOADING_APP);
        doStartApp(onStartSuccess);

        return () => {
            clearTimeout(TimeOut);
        };
    }, []);

    // if (timer || isLoading) return <LoadingScreen />;
    return (
        <ErrorBoundary isAutoReload>
            <AppRouter />
        </ErrorBoundary>
    );
}

function mapDispatchToProps(dispatch: any) {
    return {
        doStartApp: (onSuccess: () => void) => {
            dispatch({ type: SIGN_IN_ACTION.START_APP.REQUEST, payload: { onSuccess } });
        },
    };
}

export default connect(null, mapDispatchToProps)(MainScreen);
