/**

 */

import React, { memo } from 'react';

const Icons = {
    // search: require('./images/Search').default,
    // messenger: require('./images/Messenger').default,
};

type IconsType =
    | 'search'
    | 'messenger'
    | 'tickDefault'
    | 'down'
    | 'up'
    | 'edit'
    | 'language'
    | 'logout'
    | 'setting'
    | 'theme'
    | 'tick'
    | 'session'
    | 'circle'
    | 'createGroup'
    | 'like'
    | 'comment'
    | 'share'
    | 'left'
    | 'likeMessenger'
    | 'more'
    | 'offNotify'
    | 'check'
    | 'info'
    | 'addPerson'
    | 'missionWait'
    | 'missionCompleted'
    | 'schedule'
    | 'personalCalendar'
    | 'attentionCalendar'
    | 'dot'
    | 'department'
    | 'changeColorConversation'
    | 'changeNickName'
    | 'notifyStatus'
    | 'right'
    | 'chevronRight'
    | 'reactionLike'
    | 'reactionLove'
    | 'reactionLaugh'
    | 'reactionSad'
    | 'reactionAngry'
    | 'reactionSurprise'
    | 'phone'
    | 'computer'
    | 'close'
    | 'linkApp'
    | 'reload'
    | 'question'
    | 'tablet';

interface Props {
    name: IconsType;
    size?: number;
    color?: string;
    style?: object;
}

const IconsBase = (props: Props) => {
    const { name, size, color, style } = props;
    // @ts-ignore
    const Icon = Icons[name];
    return <Icon width={size} height={size} color={color} style={style} />;
};

IconsBase.defaultProps = {
    size: 24,
    color: '#ddd',
    style: {},
};

export default memo(IconsBase);
