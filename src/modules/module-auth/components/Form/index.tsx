/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import FormMenu from '@module-auth/components/Form/FormMenu';

// Component
import SignInForm from '@module-auth/components/Form/SignInForm';

// Styles
import { Form } from '@module-auth/components/Form/Style';

export default function FormAuth() {
    return (
        <Form>
            <FormMenu />
            <SignInForm />
        </Form>
    );
}
