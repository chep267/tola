/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { useContext } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Components
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { BtnMenu, HeaderCover, Header } from './Style';

// Utils
import UiContext from '@module-base/utils/Ui/UiContext';

function HeaderBase(props: any) {
    const { doSignOut, name, className } = props;
    const navigate = useNavigate();
    const { appBar } = useContext(UiContext);
    const { visible, toggleVisible } = appBar;

    return (
        <HeaderCover className={className}>
            <Header className={className}>
                <BtnMenu onClick={toggleVisible} title="Menu">
                    {visible ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
                </BtnMenu>
                <h2>{name}</h2>
                <h3>setting</h3>
            </Header>
        </HeaderCover>
    );
}

function mapStateToProps(state) {
    return {
        name: 'dong',
    };
}

function mapDispatchToProps(dispatch) {
    return {
        doSignOut: () => {
            // dispatch({ type: LOGIN_ACTION.SIGN_OUT });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBase);
