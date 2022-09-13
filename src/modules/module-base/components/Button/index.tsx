import React from 'react';

// Component
import { Container } from './Styles';

// Utils
import { emptyFunction } from '../../constants/object';

interface ButtonProps {
    itemClassName?: string;
    buttonClassName?: string;
    isDisabled?: boolean;
    onPress?(): void;
    text?: string;
    mode?: string;
    icon?: string;
}

export default function ButtonComponent(props: ButtonProps) {
    const { onPress = emptyFunction, isDisabled = false, buttonClassName = '', itemClassName = '', mode = 'text' } = props;

    return (
        <Container className={buttonClassName} onClick={onPress} disabled={isDisabled}>
            {mode === 'text' ? <span className={itemClassName}>text</span> : <span className={itemClassName}>text</span>}
        </Container>
    );
}
