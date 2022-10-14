/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

// Component
import Avatar from '@mui/material/Avatar';

interface AvatarProps {
    className?: string;
    size?: number;
    src?: string;
}

export default function AvatarBase(props: AvatarProps) {
    const { className = '', size = 30, src = '' } = props;

    return (
        <div className={className}>
            <Avatar alt="Remy Sharp" src={src} sx={{ width: size, height: size }} />
        </div>
    );
}
