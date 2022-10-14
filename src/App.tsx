/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';

// screens
import MainScreen from '@app/screens/MainScreen';

// redux - saga app
import rootReducer from '@app/reducers';
import rootSaga from '@app/sagas';

// Utils
import ThemeProvider from '@modules/module-theme/components/ThemeProvider';
import LanguageProvider from '@module-language/components/LanguageProvider';
import UiProvider from '@module-base/utils/Ui';

// msg
import messages from '@module-language/common/msg';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

const App = () => (
    <Provider store={store}>
        <LanguageProvider messages={messages}>
            <ThemeProvider>
                <UiProvider>
                    <MainScreen />
                </UiProvider>
            </ThemeProvider>
        </LanguageProvider>
    </Provider>
);

export default App;
