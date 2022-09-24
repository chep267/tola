/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { memo } from 'react';

// utils
import { emptyObject } from '@module-base/constants/object';

const Icons = {
    menu: require('./SVG/Menu').default,
    // search: require('./images/Search').default,
    // messenger: require('./images/Messenger').default,
};

export type IconsType = 'menu';

interface Props {
    name: IconsType;
    size?: number;
    fill?: string;
    stroke?: string;
    style?: object;
}

function IconsBase(props: Props) {
    const { name, size, fill, stroke, style } = props;
    const Icon = Icons[name];
    return <Icon width={size} height={size} fill={fill} stroke={stroke} style={style} />;
}

IconsBase.defaultProps = {
    size: 20,
    color: '#000',
    style: emptyObject,
};

export default memo(IconsBase);
