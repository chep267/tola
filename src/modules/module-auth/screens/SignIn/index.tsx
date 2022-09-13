/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import styled from 'styled-components';

// Components
import SignInForm from 'modules/module-auth/components/SignInForm';

// constant
import { FlexCustom } from 'modules/module-theme/constants/Mixin';

const Container = styled.div({
    ...FlexCustom({ backgroundColor: '#58ACFA' }),
    width: '100%',
    height: '100vh',
    minHeight: 750,
});

function SignInScreen() {
    return (
        <Container>
            <SignInForm />
        </Container>
    );
}

export default SignInScreen;
