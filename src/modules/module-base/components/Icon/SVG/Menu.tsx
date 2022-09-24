/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { SVGProps, memo } from 'react';

const Menu = (props: SVGProps<SVGSVGElement>) => {
    const { width, height, fill, stroke, style } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 210 210"
            // style={{
            //     enableBackground: 'new 0 0 210 210',
            // }}
            xmlSpace="preserve"
            width="1em"
            height="1em"
            {...props}>
            <path d="M75 0H15C6.716 0 0 6.716 0 15v60c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15zM75 120H15c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15zM195 0h-60c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15zM195 120h-60c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15z" />
        </svg>
    );
};

export default memo(Menu);
