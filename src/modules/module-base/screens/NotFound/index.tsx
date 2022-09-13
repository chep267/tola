import React from 'react';
import NF404 from 'modules/module-base/assets/images/404.jpg';

export default function NotFoundScreen() {
    return <img src={NF404} style={{ width: '100%', height: '100vh' }} alt="NotFound" />;
}
