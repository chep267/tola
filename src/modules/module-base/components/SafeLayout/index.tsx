/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

// Style
import { Layout } from './Styles';

// Util
import { emptyObject } from '@module-base/constants/object';

interface SafeLayoutProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function SafeLayout(props: SafeLayoutProps) {
    const { children, className = '', style = emptyObject } = props;
    return (
        <Layout className={className} style={style}>
            {children}
        </Layout>
    );
}
