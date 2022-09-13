/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { ReactElement } from 'react';
import styled from 'styled-components';

// utils
import Naruto from 'modules/module-base/assets/images/nrt.jpg';

const Container = styled.div({
    display: 'flex',
    width: '100%',
    height: '100vh',
    backgroundColor: '#58ACFA',
    alignItems: 'center',
    justifyContent: 'center',
});

const Img = styled.img({
    height: 500,
    width: 500,
    borderRadius: '50%',
});

// Man hinh loading:
export default function LoadingScreen(): ReactElement {
    return (
        <Container>
            <Img alt="loading" src={Naruto} />
        </Container>
    );
}
