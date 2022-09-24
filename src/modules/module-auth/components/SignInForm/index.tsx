/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useTheme } from 'styled-components';

// Component
import InputComponent from '@module-base/components/Input';

// msg
import msg from '@module-auth/common/msg';

// Styles
import { Form, FormTitle, FormContent, Language, Menu, ButtonMenu } from './Style';

function SignInForm() {
    const intl = useIntl();
    const theme: any = useTheme();
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Form>
            <Menu>
                <ButtonMenu
                    icon={{ name: 'menu', size: theme.iconSize.large, fill: theme.color.icon.base }}
                />
            </Menu>
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
        </Form>
    );
}

export default SignInForm;
