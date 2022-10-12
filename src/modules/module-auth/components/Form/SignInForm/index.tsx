/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { SIGN_IN_ACTION } from '@module-auth/actions/SignIn';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

// Component
import InputComponent from '@module-base/components/Input';

// msg
import msg from '@module-auth/common/msg';

// Styles
import { FormTitle, FormFooter, FormContent, ButtonSignIn } from '@module-auth/components/Form/Style';
import btn from '@module-base/components/Button/Animation/Test.module.css';

type Props = {
    doSignIn(payload: { account: string; password: string; onSuccess(): void; onFailure(): void }): void;
};

function SignInForm(props: Props) {
    const intl = useIntl();
    const navigate = useNavigate();
    const { doSignIn } = props;

    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (status) {
            setStatus('');
        }
    }, [account, password]);

    const onSignIn = () => {
        if (!account) return setStatus('account');
        if (!password) return setStatus('password');
        return doSignIn({ account, password, onSuccess: onSignInSuccess, onFailure: onSignInFailure });
    };

    const onSignInSuccess = () => navigate('/start', { replace: true });

    const onSignInFailure = () => setStatus('wrong');

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
                    isError={['account', 'wrong'].includes(status)}
                    isAutoFocus
                    isRequire
                />
                <InputComponent
                    placeholder={intl.formatMessage(msg.placeholderPassword)}
                    value={password}
                    onChange={setPassword}
                    isError={['password', 'wrong'].includes(status)}
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
