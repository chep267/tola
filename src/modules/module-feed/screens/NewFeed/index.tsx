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
    FeedLeftScroll,
    Content,
} from './Style';
import UiContext from '@module-base/utils/Ui/UiContext';

function FeedScreen() {
    const { appBar } = useContext(UiContext);
    const { visible } = appBar;
    // const visibleScroll = document.body.scrollHeight > document.body.clientHeight;

    return (
        <FeedContainer>
            <FeedLeftCover>
                <FeedLeft visibleAppBar={visible}>
                    <div style={{ height: 300 }}>11234</div>
                    <FeedLeftScroll>
                        <div style={{ height: 300 }}>11234</div>
                        <div style={{ height: 300 }}>11234</div>
                        <div style={{ height: 300 }}>11234</div>
                        <div style={{ height: 300 }}>11234</div>
                        <div style={{ height: 300 }}>11234</div>
                    </FeedLeftScroll>
                </FeedLeft>
            </FeedLeftCover>
            <FeedBody>
                <FeedContent>
                    <Content />
                </FeedContent>
            </FeedBody>
            <FeedRightCover>
                <FeedRight visibleScroll />
            </FeedRightCover>
        </FeedContainer>
    );
}

export default FeedScreen;
