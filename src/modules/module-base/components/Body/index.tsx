/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

import styled from 'styled-components';
import SafeLayout from '@module-base/components/SafeLayout';

const Container = styled(SafeLayout)({
    backgroundColor: 'red',
});

function BodyBase(props: any) {
    const { className, children } = props;
    return <Container className={className}>{children}</Container>;
}

export default BodyBase;
