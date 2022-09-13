/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

// Selector
import { getMeId } from 'modules/module-auth/selectors/User';

// Utils
import localStorage from 'modules/module-base/utils/localStorage';

function StartScreen(props: any) {
    const { meIdCookie, meId, companyId, doLoginSuccess } = props;
    const navigate = useNavigate();

    useEffect(() => {
        if (meIdCookie && meIdCookie !== 'undefined') {
            // có meIdCookie là đã đăng nhập
            if (meId && companyId) {
                // có meId và companyId là đã start xong -> chuyển vào home
                redirectAfterSuccess();
            } else {
                // put action "MAIN_APP_START" để lưu meId, companyId vào state
                doLoginSuccess();
            }
        } else {
            // chưa đăng nhập, cần gửi api đăng nhập
            checkLoginProgress();
        }
        /* eslint-disable-next-line */
    }, [meIdCookie, meId, companyId]);

    const redirectAfterSuccess = () => {
        // const { href } = window.location;
        // // Fix bug - CuongNT: dung 'url-polyfill" de fix loi searchParams khong co tren bchrome 47
        // const url = new URL(href);
        // const backUrl = url.searchParams.get('return_to');
        // if (backUrl) {
        //     const url2 = new URL(backUrl);
        //     history.replace(url2.pathname + url2.search);
        //     return;
        // }
        //
        // const { prevRouterPathname }: any = window;
        // const defaultRouter = prevRouterPathname || configServer.ROUTER_DEFAULT() || '/';
        // history.replace(defaultRouter);
    };

    const onSuccess = () => {
        // ở đây không cần làm gì, đợi action "MAIN_APP_START" chạy xong.
        console.log('onSuccess SSO');
    };

    const onFailure = () => {
        navigate('/login', { replace: true });
    };

    const checkLoginProgress = () => {};

    return <div>{/*<Icon type="loading" className={styles['snw-login-icon-loading']} />*/}</div>;
}

function mapStateToProps(state: object) {
    const meIdCookie = localStorage.get('isAuth');
    const meId = getMeId(state);

    return {
        meId,
        meIdCookie,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        // doLoginByTokenAuthor2: (code: string, redirectUri: string, sessionState: string) =>
        //     dispatch(authUi.doLoginByTokenAuthor2(code, redirectUri, sessionState)),
        // doLoginSuccess: () => dispatch({ type: 'MAIN_APP_START' }),
        // doLoginAnonymous: () => {
        //     // Lấy thông tin user công dân trong Configuration.
        //     const { username, password } = configServer.getDataConfiguration() || {};
        //     return dispatch(authUi.doLogin(username, password));
        // },
        // getCompaniesPublic: () => dispatch({ type: 'GET_COMPANIES_PUBLIC' }),
        // doClearCookie: () => dispatch({ type: 'CLEAR_COOKIE' }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
