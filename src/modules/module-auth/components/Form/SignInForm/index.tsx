/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { SIGN_IN_ACTION } from '@module-auth/actions/SignIn';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useTheme } from 'styled-components';
import { connect } from 'react-redux';

// Component
import InputComponent from '@module-base/components/Input';

// msg
import msg from '@module-auth/common/msg';

// Styles
import { Form, FormTitle, FormFooter, FormContent, ButtonSignIn } from '@module-auth/components/Form/Style';
import btn from '@module-base/components/Button/Animation/Test.module.css';

type Props = {
    doSignIn(payload: { account: string; password: string; onSuccess(): void; onFailure(): void }): void;
};

function SignInForm(props: Props) {
    const intl = useIntl();
    const theme: any = useTheme();
    const { doSignIn } = props;

    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');

    const onSignIn = () => {
        doSignIn({ account, password, onSuccess: onSignInSuccess, onFailure: onSignInFailure });
    };

    const onSignInSuccess = () => {
        window.location.replace('/start');
    };

    const onSignInFailure = () => {
        setStatus('wrong');
    };

    return (
        <>
            <FormTitle>
                <span>{intl.formatMessage(msg.titleLogin)}</span>
            </FormTitle>
            <FormContent>
                <InputComponent
                    placeholder={intl.formatMessage(msg.placeholderAccount)}
                    value={account}
                    onChange={setAccount}
                    isAutoFocus
                />
                <InputComponent
                    placeholder={intl.formatMessage(msg.placeholderPassword)}
                    value={password}
                    onChange={setPassword}
                    isRequire
                    isSecureText
                />
            </FormContent>
            <FormFooter>
                <ButtonSignIn
                    buttonClassName={btn['glow-on-hover']}
                    text={intl.formatMessage(msg.titleLogin)}
                    onPress={onSignIn}
                />
            </FormFooter>
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
