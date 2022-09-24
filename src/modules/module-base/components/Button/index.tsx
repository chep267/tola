import React from 'react';

// Component
import { Container } from './Styles';
import Icon, { IconsType } from '@module-base/components/Icon';

// Utils
import { emptyFunction, emptyObject } from '@module-base/constants/object';

interface ButtonProps {
    itemClassName?: string;
    buttonClassName?: string;
    isDisabled?: boolean;
    onPress?(): void;
    text?: string;
    mode?: string;
    icon?: {
        name: IconsType;
        size?: number;
        fill?: string;
        stroke?: string;
    };
    style?: object;
    className?: string;
}

export default function Button(props: ButtonProps) {
    const {
        className = '',
        buttonClassName = '',
        itemClassName = '',
        style = emptyObject,
        onPress = emptyFunction,
        isDisabled = false,
        text = '',
        icon,
    } = props;

    return (
        <Container
            className={`${className} ${buttonClassName}`}
            onClick={onPress}
            disabled={isDisabled}
            style={style}>
            {text ? <span className={itemClassName}>{text}</span> : null}
            {icon ? (
                <Icon name={icon.name} size={icon.size} fill={icon.fill} stroke={icon.stroke} />
            ) : null}
        </Container>
    );
}
