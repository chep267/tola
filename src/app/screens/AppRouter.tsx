/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import { BrowserRouter, Routes, Route as PublicRoute } from 'react-router-dom';

// Component
import PrivateRoute from '@module-auth/components/PrivateRoute';

// Screens
import NotFoundScreen from '@module-base/screens/NotFound';
import StartScreen from '@module-auth/screens/Start';
import SignInScreen from '@module-auth/screens/SignIn';
// import a from 'placeHolder/';
// // import LoginScreen from "../login/LoginScreen";
//
// import MainAppScreen from './MainApp.screen';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/login" element={<LoginScreen />} />*/}
                {/*<Route path="/register" element={<RegisterScreen />} />*/}
                {/*<Route path="/recover" element={<RecoverScreen />} />*/}
                {/*<Route path="/" element={<PrivateRoute element={HomeScreen} />} />*/}
                {/*<Route path="/home" element={<PrivateRoute element={HomeScreen} />} />*/}
                <PublicRoute path="*" element={<SignInScreen />} />
                <PublicRoute path="*" element={<NotFoundScreen />} />
            </Routes>
        </BrowserRouter>
    );
}
