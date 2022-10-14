/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

export interface UiProps {
    appBar: {
        visible: boolean;
        toggleVisible: () => void;
    };
}

const initialState = {
    appBar: {
        visible: true,
        toggleVisible: () => null,
    },
};

const UiContext = React.createContext<UiProps>(initialState);
export default UiContext;
