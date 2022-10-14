/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';
import SafeLayout from '@module-base/components/SafeLayout';
import Header from '@module-base/components/Header';
import {
    APP_BAR_WIDTH,
    BODY_PADDING,
    HEADER_HEIGHT,
    HEADER_PADDING,
    CONTENT_MIN_WIDTH_HEIGHT,
} from '@module-base/constants/Layout';

export const BaseContainer = styled(SafeLayout)({
    width: 'calc(100vw - 15px)',
    height: '100vh',
    flexDirection: 'column',
    minHeight: CONTENT_MIN_WIDTH_HEIGHT,
    minWidth: CONTENT_MIN_WIDTH_HEIGHT,
});

export const BaseHeader = styled(Header)(({ theme }) => ({
    width: `calc(100% - ${2 * HEADER_PADDING + APP_BAR_WIDTH}px)`,
    height: `${HEADER_HEIGHT}px`,
    maxHeight: `${HEADER_HEIGHT}px`,
    minHeight: `${HEADER_HEIGHT}px`,
    padding: `0 ${HEADER_PADDING}px 0 ${HEADER_PADDING + APP_BAR_WIDTH}px`,
}));

export const BaseBody = styled(SafeLayout)({
    width: '100%',
    height: `calc(100% - ${HEADER_HEIGHT}px)`,
    maxHeight: `calc(100% - ${HEADER_HEIGHT}px)`,
    minHeight: `calc(100% - ${HEADER_HEIGHT}px)`,
    justifyContent: 'center',
});

export const Screen = styled(SafeLayout)({
    padding: BODY_PADDING,
    width: `calc(100% - ${APP_BAR_WIDTH}px)`,
    height: `calc(100% - ${2 * BODY_PADDING}px)`,
    maxHeight: `calc(100% - ${2 * BODY_PADDING}px)`,
    minHeight: `calc(100% - ${2 * BODY_PADDING}px)`,
});
