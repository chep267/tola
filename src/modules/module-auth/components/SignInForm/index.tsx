/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import styled from 'styled-components';

// constant
import { FlexCustom } from 'modules/module-theme/constants/Mixin';
import InputComponent from 'modules/module-base/components/Input';

const Form = styled.div({
    ...FlexCustom({ backgroundColor: '#f0f2f5' }),
    flexDirection: 'column',
    width: '50%',
    height: '50%',
    minHeight: 650,
    minWidth: 480,
    borderRadius: 12,
});

const Language = styled.div({
    ...FlexCustom({ position: 'absolute', top: 0, right: 0, zIndex: 999 }),
    width: 200,
    height: 20,
    padding: 10,
    borderLeft: '5px solid #038cf5',
    borderBottom: '2px solid #038cf5',
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 50,
    fontSize: 16,
});

const FormContent = styled.div({
    ...FlexCustom({ flexDirection: 'column', width: '100%' }),
});

function SignInForm() {
    return (
        <Form>
            <Language>
                <span>en</span>
                <span>/</span>
                <span>vi</span>
            </Language>
            <FormContent>
                <InputComponent />
                <InputComponent isRequire isSecureText />
            </FormContent>
        </Form>
    );
}

export default SignInForm;
