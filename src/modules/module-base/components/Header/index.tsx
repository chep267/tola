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

const Container = styled.div(({ theme }) => ({
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: theme.zIndex.underMax,
}));

const ContainerFake = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

function HeaderBase(props: any) {
    const { doSignOut, name, className } = props;
    const navigate = useNavigate();
    const [isShowMenu, setShowMenu] = useState(false);
    const { locale, toggleLanguage, messages } = useLanguage();

    const onSignOut = () => {
        doSignOut();
        navigate('/login');
    };

    const onChangeLanguage = () => {
        // const newLang = lang === 'vi' ? 'en' : 'vi';
        // onChangeLang(newLang);
    };

    const onShowMenu = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setShowMenu(!isShowMenu);
    };

    const onHideMenu = () => {
        setShowMenu(false);
    };

    return (
        <>
            <Container className={className} role="presentation" onClick={onHideMenu}>
                <h2>{name}</h2>
                <h3>setting</h3>
            </Container>
            <ContainerFake className={className} />
        </>
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
