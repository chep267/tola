/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';

// Components
import SafeLayout from '@module-base/components/SafeLayout';
import {
    FEED_LEFT_WIDTH,
    CONTENT_MIN_WIDTH_HEIGHT,
    CONTENT_MAX_WIDTH_HEIGHT,
    HEADER_HEIGHT,
    BODY_PADDING,
} from '@module-base/constants/Layout';
import ScrollBar from '@module-base/components/ScrollBar';

export const FeedContainer = styled(SafeLayout)({
    // backgroundColor: 'red',
});

const Wrap = styled(SafeLayout)(({ theme }) => ({
    width: FEED_LEFT_WIDTH,
    maxWidth: FEED_LEFT_WIDTH,
    minWidth: FEED_LEFT_WIDTH,
    borderRadius: 8,
    overflow: 'hidden',
    zIndex: theme.zIndex.cover,
    transition: 'all 0.5s',
    overscrollBehavior: 'contain',
}));

export const FeedLeftCover = styled(Wrap)`
    &&& {
        @media screen and (max-width: 919px) {
            // 60 + 10 + 360 + 480 + 10
            width: 0 !important;
            min-width: 0 !important;
            max-width: 0 !important;
        }
    }
`;

export const FeedRightCover = styled(Wrap)`
    &&& {
        @media screen and (max-width: 1279px) {
            // 60 + 10 + 360 + 480 + 360 + 10
            width: 0 !important;
            min-width: 0 !important;
            max-width: 0 !important;
        }
    }
`;

export const FeedLeft = styled(FeedLeftCover)<{ visibleAppBar: boolean }>(({ theme, visibleAppBar }) => ({
    position: 'fixed',
    backgroundColor: '#c3c3c3',
    top: HEADER_HEIGHT + BODY_PADDING,
    left: visibleAppBar ? 70 : 10,
    bottom: 0,
    height: `calc(100% - ${HEADER_HEIGHT + 2 * BODY_PADDING}px)`,
    zIndex: theme.zIndex.lv10,
}));

export const FeedRight = styled(FeedRightCover)(({ theme }) => ({
    position: 'fixed',
    backgroundColor: '#c3c3c3',
    top: HEADER_HEIGHT + BODY_PADDING,
    right: BODY_PADDING,
    bottom: 0,
    height: `calc(100% - ${HEADER_HEIGHT + 2 * BODY_PADDING}px)`,
    zIndex: theme.zIndex.lv10,
}));

export const FeedLeftContent = styled(ScrollBar)({
    width: '100%',
    height: '100%',
    backgroundColor: '#c3c3c3',
});

export const FeedBody = styled(SafeLayout)({
    justifyContent: 'center',
    // backgroundColor: '#000',
    borderRadius: 8,
});

export const FeedContent = styled(SafeLayout)({
    maxWidth: CONTENT_MAX_WIDTH_HEIGHT,
    minWidth: CONTENT_MIN_WIDTH_HEIGHT,
    height: 4000,
    backgroundColor: '#c3c3c3',
    borderRadius: 8,
    paddingBottom: 20,
});
