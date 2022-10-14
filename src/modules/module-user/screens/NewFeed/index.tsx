/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { useContext } from 'react';

import {
    FeedContainer,
    FeedLeft,
    FeedRight,
    FeedBody,
    FeedContent,
    FeedLeftCover,
    FeedRightCover,
    FeedLeftContent,
} from './Style';
import UiContext from '@module-base/utils/Ui/UiContext';

function FeedScreen() {
    const { appBar } = useContext(UiContext);
    const { visible } = appBar;

    return (
        <FeedContainer>
            <FeedLeftCover>
                <FeedLeft visibleAppBar={visible}>
                    <FeedLeftContent>abcd</FeedLeftContent>
                </FeedLeft>
            </FeedLeftCover>
            <FeedBody>
                <FeedContent />
            </FeedBody>
            <FeedRightCover>
                <FeedRight />
            </FeedRightCover>
        </FeedContainer>
    );
}

export default FeedScreen;
