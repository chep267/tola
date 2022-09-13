import React, { useRef, useCallback, useEffect, useState, ChangeEvent, RefObject } from 'react';

// Component
import { Container, Input, Layer, LayerIcon, Placeholder } from './Styles';

// Utils
import OPEN from 'modules/module-base/assets/images/eye-mo.png';
import CLOSE from 'modules/module-base/assets/images/eye-dong.png';

interface InputProps {
    value?: string;
    onChange(value?: string, type?: string): void;
    placeholder?: string;
    isRequire?: boolean;
    isError?: boolean;
    isAutoFocus?: boolean;
    isSecureText?: boolean;
    isDisabled?: boolean;
}

export default function InputComponent(props: InputProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let TIME_OUT;
    const { value, onChange, placeholder, isRequire, isAutoFocus, isError, isSecureText, isDisabled } = props;

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
        <Container isError>
            <Input
                ref={inputRef}
                autoFocus={isAutoFocus}
                type={getSecureText ? 'password' : 'text'}
                defaultValue={value}
                onChange={onChangeValue}
                spellCheck="false"
                disabled={isDisabled}
            />
            <Placeholder onClick={onClickFocus} value={value}>{`${placeholder} ${isRequire ? '*' : ''}`}</Placeholder>
            <Layer onClick={onChangeLayer} isSecureText>
                <LayerIcon src={getSecureText ? OPEN : CLOSE} alt={'eye'} />
            </Layer>
        </Container>
    );
}
