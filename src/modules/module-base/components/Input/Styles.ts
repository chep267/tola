import styled from 'styled-components';
import { FlexCustom, FlexBase, BorderRadiusCustom } from 'modules/module-theme/constants/Mixin';

export const Container = styled.div<{ isError: boolean }>((props) => ({
    ...FlexCustom({ justifyContent: 'flex-start' }),
    ...BorderRadiusCustom(6),
    width: '80%',
    padding: '5px 10px',
    marginTop: 10,
    border: props.isError ? '2px solid #c80000' : '1px solid #000000',
}));

export const Input = styled.input({
    ...FlexBase,
    marginRight: 20,
    fontSize: 25,
    flexGrow: 1,
    flexShrink: 1,
    height: 50,
    fontFamily: 'SegoeUI-Regular, serif',
    border: 'none',
    outlineWidth: 0,
    appearance: 'menulist-button',
    backgroundImage: 'none !important',
    backgroundColor: 'unset !important',
    ':focus': {
        // outlineColor: '#f0f2f5',
        // outlineWidth: 0,
    },
});

export const Layer = styled.div<{ visible: boolean }>((props) => ({
    ...FlexCustom({ display: props.visible ? 'flex' : 'none' }),
    ...BorderRadiusCustom(8),
    height: 50,
}));

export const LayerIcon = styled.img({
    ...BorderRadiusCustom('50%'),
    width: 50,
    height: 50,
    cursor: 'pointer',
});

export const Placeholder = styled.span<{ visible: boolean }>((props) => ({
    display: props.visible ? 'none' : 'flex',
    position: 'absolute',
    marginLeft: 6,
    color: '#f2761c',
}));
