/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

// Component
import { List, Item } from './Styles';

// Utils
import { emptyFunction, emptyObject } from '@module-base/constants/object';

interface ButtonProps {
    itemClassName?: string;
    overlayClassName?: string;
    isDisabled?: boolean;
    onPress?(): void;
    text?: string;
    mode?: string;
    size?: number;
    style?: object;
    className?: string;

    data?: Array<{ id?: string; title?: string; icon?: string; onPress?(): void }>;
}

export default function MenuList(props: ButtonProps) {
    const {
        className = '',
        overlayClassName = '',
        itemClassName = '',
        style = emptyObject,
        isDisabled = false,
        data = null,
    } = props;

    return (
        <List className={`${className} ${overlayClassName}`} isDisabled={isDisabled} style={style}>
            {data &&
                data.map(({ id, title, icon, onPress = emptyFunction }) => (
                    <Item className={itemClassName} key={id || title} height={30} onClick={onPress}>
                        {icon}
                        {title}
                    </Item>
                ))}
        </List>
    );
}
