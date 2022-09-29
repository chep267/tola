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

const Container = styled.div({
    ...FlexCustom({ backgroundColor: '#58ACFA' }),
    width: '100%',
    height: '100vh',
    minHeight: 500,
});

function SignInScreen() {
    return (
        <Container>
            <FormAuth />
        </Container>
    );
}

export default SignInScreen;
