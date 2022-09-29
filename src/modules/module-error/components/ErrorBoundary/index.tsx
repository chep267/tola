/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

// Component
import FallbackComponent from '@modules/module-error/components/ErrorBoundary/FallbackComponent';

export default class ErrorBoundary extends React.Component<
    { children: React.ReactNode; FallBack?: React.FunctionComponent; isAutoReload?: boolean },
    { hasError: boolean }
> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.log('Tola - error: ', error, '\n--\n', errorInfo, '\n--');
    }

    render() {
        const { hasError } = this.state;
        const { children, FallBack = FallbackComponent, isAutoReload = true } = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return <FallBack isAutoReload={isAutoReload} />;
        }

        return children;
    }
}
