/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import styled from 'styled-components';

// Components
import FormAuth from '@module-auth/components/Form';

// constant
import { FlexCustom } from '@module-theme/constants/Mixin';
import SafeLayout from '@module-base/components/SafeLayout';

const Container = styled(SafeLayout)({
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 450,
    backgroundColor: '#000',
});

function SignInScreen() {
    return (
        <Container>
            <FormAuth />
        </Container>
    );
}

export default SignInScreen;
