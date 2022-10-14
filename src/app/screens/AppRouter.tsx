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
import SignInScreen from '@module-auth/screens/SignIn';
import HomeScreen from './HomeScreen';
import FeedScreen from '@module-feed/screens/NewFeed/index';
import MessengerScreen from '@module-messenger/screens/MessengerApp';
import NotFoundScreen from '@module-base/screens/NotFound';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<PrivateRoute type="auth" element={<SignInScreen />} />} />
                <Route path="/start" element={<PrivateRoute type="start" element={<SignInScreen />} />} />
                <Route path="*" element={<PrivateRoute type="auth" element={<HomeScreen element={<HomeRouter />} />} />} />
            </Routes>
        </BrowserRouter>
    );
}

function HomeRouter() {
    return (
        <Routes>
            <Route path="feed" element={<FeedScreen />} />
            <Route path="messenger" element={<MessengerScreen />} />
            <Route path="/" element={<FeedScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
        </Routes>
    );
}
