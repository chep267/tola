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
    // height: `calc(100% - ${0 * BODY_PADDING}px)`,
});

const Wrap = styled(SafeLayout)(({ theme }) => ({
    flexDirection: 'column',
    width: FEED_LEFT_WIDTH,
    maxWidth: FEED_LEFT_WIDTH,
    minWidth: FEED_LEFT_WIDTH,
    height: `calc(100% - ${HEADER_HEIGHT + 2 * BODY_PADDING}px)`,
    borderRadius: 8,
    zIndex: theme.zIndex.cover,
    transition: 'all 0.5s',
    overscrollBehavior: 'contain',
    overflow: 'hidden',
}));

export const FeedLeftCover = styled(Wrap)`
    @media screen and (max-width: 1234px) {
        width: ${FEED_LEFT_WIDTH - 40}px;
        min-width: ${FEED_LEFT_WIDTH - 40}px;
        max-width: ${FEED_LEFT_WIDTH - 40}px;
    }
    @media screen and (max-width: 1194px) {
        width: ${FEED_LEFT_WIDTH}px;
        min-width: ${FEED_LEFT_WIDTH}px;
        max-width: ${FEED_LEFT_WIDTH}px;
    }
    @media screen and (max-width: 954px) {
        width: ${FEED_LEFT_WIDTH - 40}px;
        min-width: ${FEED_LEFT_WIDTH - 40}px;
        max-width: ${FEED_LEFT_WIDTH - 40}px;
    }
    @media screen and (max-width: 914px) {
        width: ${FEED_LEFT_WIDTH - 80}px;
        min-width: ${FEED_LEFT_WIDTH - 80}px;
        max-width: ${FEED_LEFT_WIDTH - 80}px;
    }
    @media screen and (max-width: 874px) {
        width: 0 !important;
        min-width: 0 !important;
        max-width: 0 !important;
    }
`;

export const FeedRightCover = styled(Wrap)`
    @media screen and (max-width: 1314px) {
        width: ${FEED_LEFT_WIDTH - 40}px;
        min-width: ${FEED_LEFT_WIDTH - 40}px;
        max-width: ${FEED_LEFT_WIDTH - 40}px;
    }
    @media screen and (max-width: 1274px) {
        width: ${FEED_LEFT_WIDTH - 80}px;
        min-width: ${FEED_LEFT_WIDTH - 80}px;
        max-width: ${FEED_LEFT_WIDTH - 80}px;
    }
    @media screen and (max-width: 1194px) {
        width: 0 !important;
        min-width: 0 !important;
        max-width: 0 !important;
    }
`;

export const FeedLeft = styled(FeedLeftCover)<{ visibleAppBar: boolean }>(({ theme, visibleAppBar }) => ({
    position: 'fixed',
    backgroundColor: '#c3c3c3',
    top: HEADER_HEIGHT + BODY_PADDING,
    left: visibleAppBar ? 70 : 10,
    bottom: 0,
    zIndex: theme.zIndex.lv10,
}));

export const FeedRight = styled(FeedRightCover)<{ visibleScroll: boolean }>(({ theme, visibleScroll }) => ({
    position: 'fixed',
    backgroundColor: '#c3c3c3',
    top: HEADER_HEIGHT + BODY_PADDING,
    right: BODY_PADDING + (visibleScroll ? 0 : 15),
    bottom: 0,
    zIndex: theme.zIndex.lv10,
}));

export const FeedLeftScroll = styled(ScrollBar)({
    backgroundColor: '#cfcfcf',
});

export const FeedBody = styled(SafeLayout)({
    justifyContent: 'center',
    borderRadius: 8,
});

export const FeedContent = styled(SafeLayout)({
    maxWidth: CONTENT_MAX_WIDTH_HEIGHT,
    minWidth: CONTENT_MIN_WIDTH_HEIGHT,
    padding: '0 10px',
});

export const Content = styled(SafeLayout)({
    backgroundColor: '#ff7f50',
    borderRadius: 8,
    height: 2000,
});
