import { lazy } from 'react';

const NotFoundScreen = lazy(() => require('./NotFoundScreen'));
const HomeScreen = lazy(() => require('./HomeScreen'));

const MainAppScreen = {
    NotFoundScreen: {
        name: 'NotFoundScreen',
        component: NotFoundScreen,
        path: '/404',
    },
    HomeScreen: {
        name: 'HomeScreen',
        component: HomeScreen,
        path: '/',
    },
    MessengerScreen: {
        name: 'MessengerScreen',
        component: HomeScreen,
        path: '/messenger',
    },
};

export default MainAppScreen;
