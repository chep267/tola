import styled from 'styled-components';
import { FlexCustom, FlexBase, BorderRadiusCustom } from 'modules/module-theme/constants/Mixin';

export const Container = styled.div<{ isError: boolean }>((props) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    WebkitBorderRadius: '6px',
    MozBorderRadius: '6px',
    borderRadius: '6px',
    width: '80%',
    padding: '5px 0 5px 15px',
    marginTop: '10px',
    border: props.isError ? '2px solid #c80000' : '1px solid #000000',
}));

export const Input = styled.input({
    ...FlexBase,
    fontSize: '25px',
    width: '80%',
    height: '50px',
    fontFamily: 'SegoeUI-Regular, serif',
    border: 'none',
    outlineColor: '#fff',
    appearance: 'menulist-button',
    backgroundImage: 'none !important',
    backgroundColor: 'unset !important',
});

export const Layer = styled.div<{ isSecureText: boolean }>((props) => ({
    ...FlexCustom({ position: 'absolute', top: 5, bottom: 5, right: 5, zIndex: 999, display: props.isSecureText ? 'flex' : 'none' }),
    ...BorderRadiusCustom(8),
    height: 50,
}));

export const LayerIcon = styled.img({
    ...BorderRadiusCustom('50%'),
    width: 50,
    height: 50,
    cursor: 'pointer',
});

export const Placeholder = styled.span<{ value: string | undefined }>((props) => ({
    display: props.value ? 'none' : 'flex',
    position: 'absolute',
    marginLeft: 6,
    color: '#f2761c',
}));
