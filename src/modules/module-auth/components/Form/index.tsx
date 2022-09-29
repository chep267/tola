/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { SIGN_IN_ACTION } from '@module-auth/actions/SignIn';
import FormMenu from '@module-auth/components/Form/FormMenu';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useTheme } from 'styled-components';
import { connect } from 'react-redux';

// Component
import SignInForm from '@module-auth/components/Form/SignInForm';

// msg
import msg from '@module-auth/common/msg';

// Styles
import { Form, FormTitle, FormFooter, FormContent, ButtonSignIn } from '@module-auth/components/Form/Style';
import btn from '@module-base/components/Button/Animation/Test.module.css';

type Props = {
    doSignIn(payload: { account: string; password: string; onSuccess(): void; onFailure(): void }): void;
};

function FormAuth(props: Props) {
    return (
        <Form>
            <FormMenu />
            <SignInForm />
        </Form>
    );
}

const mapStateToProps = () => {
    // do
    return {};
};

const mapDispatchToProps = (dispatch: any) => {
    // do
    return {
        doSignIn: (payload) => {
            dispatch({ type: SIGN_IN_ACTION.SIGN_IN.REQUEST, payload });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAuth);
