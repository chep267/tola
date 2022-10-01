/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import { useLanguage } from '@module-language/utils/useLanguage';

export default function withLanguage(WrappedComponent) {
    const language = useLanguage();
    return class EnhancedComponent extends React.Component {
        render() {
            return <WrappedComponent language={language} {...this.props} />;
        }
    };
}
