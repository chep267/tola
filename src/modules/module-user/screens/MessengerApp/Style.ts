/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';
import SafeLayout from '@module-base/components/SafeLayout';
import { MESSENGER_LEFT_WIDTH } from '@module-base/constants/Layout';

export const MessengerContainer = styled(SafeLayout)({
    position: 'relative',
    // backgroundColor: 'gray',
});

const Left = styled(SafeLayout)(({ theme }) => ({
    width: MESSENGER_LEFT_WIDTH,
    maxWidth: MESSENGER_LEFT_WIDTH,
    minWidth: MESSENGER_LEFT_WIDTH,
    backgroundColor: 'gray',
    borderRadius: 8,
    overflow: 'hidden',
    zIndex: theme.zIndex.lv2,
    transition: 'all 0.5s',
}));

export const MessengerLeft = styled(Left)`
    &&& {
        @media screen and (max-width: 919px) {
            // 60 + 10 + 360 + 480 + 10
            width: 88px !important;
            min-width: 88px !important;
            max-width: 88px !important;
        }
        @media screen and (max-width: 647px) {
            // 60 + 10 + 88 + 480 + 10
            width: 0 !important;
            min-width: 0 !important;
            max-width: 0 !important;
        }
    }
`;

export const MessengerRight = styled(Left)`
    &&& {
        @media screen and (max-width: 1279px) {
            // 60 + 10 + 360 + 480 + 360 + 10
            position: absolute;
            top: 17%;
            right: 20px;
            bottom: 20px;
            height: 80%;
        }
    }
`;

export const MessengerBody = styled(SafeLayout)({
    backgroundColor: '#ff7f50',
    borderRadius: 8,
});
