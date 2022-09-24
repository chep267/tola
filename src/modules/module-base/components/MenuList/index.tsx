import React from 'react';

// Component
import { Container } from './Styles';
import Icon, { IconsType } from '@module-base/components/Icon';

// Utils
import { emptyFunction, emptyObject } from '@module-base/constants/object';

interface ButtonProps {
    itemClassName?: string;
    overlayClassName?: string;
    isDisabled?: boolean;
    onPress?(): void;
    text?: string;
    mode?: string;
    icon?: IconsType;
    size?: number;
    style?: object;
    className?: string;
}

export default function MenuList(props: ButtonProps) {
    const {
        className = '',
        overlayClassName = '',
        itemClassName = '',
        style = emptyObject,
        onPress = emptyFunction,
        isDisabled = false,
        mode,
        icon,
        size,
    } = props;

    return (
        // <Container
        //     className={`${className} ${overlayClassName}`}
        //     onClick={onPress}
        //     // disabled={isDisabled}
        //     style={style}>
        //     {mode === 'text' ? <span className={itemClassName}>text</span> : null}
        //     {icon ? <Icon name={icon} size={size} /> : null}
        // </Container>
        <div />
    );
}
