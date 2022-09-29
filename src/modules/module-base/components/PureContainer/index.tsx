/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

export default class PureContainer extends React.Component<{ children?: React.ReactNode; className?: string }> {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(): boolean {
        return false;
    }

    render() {
        const { children = null, className = '' } = this.props;
        return <div className={className}>{children}</div>;
    }
}
