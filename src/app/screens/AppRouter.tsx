/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component
import PrivateRoute from '@module-auth/components/PrivateRoute';

// Screens
import NotFoundScreen from '@module-base/screens/NotFound';
import SignInScreen from '@module-auth/screens/SignIn';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<PrivateRoute type="auth" element={<SignInScreen />} />} />
                <Route path="/start" element={<PrivateRoute type="start" element={<SignInScreen />} />} />
                <Route path="*" element={<PrivateRoute element={<NotFoundScreen />} />} />
            </Routes>
        </BrowserRouter>
    );
}
