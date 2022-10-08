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

function Header(props: any) {
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
        <div className={className} role="presentation" onClick={onHideMenu}>
            <h1>{name}</h1>
            <img role="presentation" src={iconMenu} alt="" onClick={onShowMenu} />
            {isShowMenu ? (
                <div>
                    <div role="presentation" onClick={onChangeLanguage}>
                        <span>{messages[locale]}</span>
                    </div>
                    <div />
                    <div role="presentation" onClick={onSignOut}>
                        <span>messages.login.signOut</span>
                    </div>
                </div>
            ) : null}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
