/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import iconMenu from '@module-base/assets/images/iconMenu.png';
import { useLanguage } from '@module-language/utils/useLanguage';
import styled from 'styled-components';

const Container = styled.div({
    display: 'flex',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
});

function BodyBase(props: any) {
    const { className, children } = props;
    return <Container className={className}>{children}</Container>;
}

export default BodyBase;
