import { APP_BAR_WIDTH, HEADER_HEIGHT } from '@module-base/constants/Layout';
import styled from 'styled-components';

const getAppBarWidth = (visibleAppBar) => {
    if (visibleAppBar) {
        return {
            width: `${APP_BAR_WIDTH}px`,
            minWidth: `${APP_BAR_WIDTH}px`,
            maxWidth: `${APP_BAR_WIDTH}px`,
        };
    }
    return {
        width: '0',
        minWidth: '0',
        maxWidth: '0',
    };
};

const Wrap = styled.div<{ visibleAppBar: boolean }>(({ visibleAppBar, theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ...getAppBarWidth(visibleAppBar),
    minHeight: '100%',
    maxHeight: '100%',
    zIndex: theme.zIndex.underMax,
    transition: 'all 0.35s',
    overflow: 'hidden',
}));

export const Container = styled(Wrap)`
    &&& {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        @media screen and (max-width: 600px) {
            width: 0 !important;
            min-width: 0 !important;
            max-width: 0 !important;
        }
    }
`;

export const ContainerFake = styled(Wrap)`
    &&& {
        z-index: 1;
        @media screen and (max-width: 600px) {
            width: 0 !important;
            min-width: 0 !important;
            max-width: 0 !important;
        }
    }
`;

const Menu = styled.button(({ theme }) => ({
    position: 'fixed',
    top: 15,
    left: 20,
    width: 30,
    height: 30,
    zIndex: theme.zIndex.max,
    cursor: 'pointer',
}));

export const BtnMenu = styled(Menu)`
    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const ListApp = styled.div((props) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: HEADER_HEIGHT,
}));
