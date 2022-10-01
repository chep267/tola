/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import { useTheme } from '@module-theme/utils/useTheme';

export default function withTheme(WrappedComponent) {
    const theme = useTheme();
    return class EnhancedComponent extends React.Component {
        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <WrappedComponent theme={theme} {...this.props} />;
        }
    };
}
