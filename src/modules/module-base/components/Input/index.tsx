import React, { useRef, useCallback, useEffect, useState, ChangeEvent, RefObject } from 'react';

// Component
import { Container, Input, Layer, LayerIcon, Placeholder } from './Styles';

// Utils
import OPEN from 'modules/module-base/assets/images/eye-mo.png';
import CLOSE from 'modules/module-base/assets/images/eye-dong.png';
import { emptyFunction } from 'modules/module-base/constants/object';

interface InputProps {
    value?: string;
    placeholder?: string;
    isRequire?: boolean;
    isError?: boolean;
    isAutoFocus?: boolean;
    isSecureText?: boolean;
    isDisabled?: boolean;
    onChange?(value?: string, type?: string): void;
}

export default function InputComponent(props: InputProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let TIME_OUT;
    const {
        value = '',
        onChange = emptyFunction,
        placeholder = 'Aa...',
        isRequire = false,
        isAutoFocus = false,
        isError = false,
        isSecureText = false,
        isDisabled = false,
    } = props;

    const [getSecureText, setSecureText] = useState(isSecureText);
    const inputRef = useRef() as RefObject<HTMLInputElement>;

    const onClickFocus = useCallback(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    useEffect(() => {
        if (isError) onClickFocus();
    }, [isError]);

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value);

    const onChangeLayer = () => {
        setSecureText(!getSecureText);
        TIME_OUT = setTimeout(() => {
            if (inputRef && inputRef.current) {
                inputRef.current.focus();
                inputRef.current.selectionStart = inputRef.current.selectionEnd = inputRef.current.value.length;
            }
        }, 0);
    };

    return (
        <Container isError={isError}>
            <Input
                ref={inputRef}
                autoFocus={isAutoFocus}
                type={getSecureText ? 'password' : 'text'}
                defaultValue={value}
                onChange={onChangeValue}
                spellCheck="false"
                disabled={isDisabled}
            />
            <Placeholder onClick={onClickFocus} visible={!value}>{`${placeholder} ${isRequire ? '*' : ''}`}</Placeholder>
            <Layer onClick={onChangeLayer} visible={isSecureText}>
                <LayerIcon src={getSecureText ? OPEN : CLOSE} alt={'eye'} />
            </Layer>
        </Container>
    );
}
