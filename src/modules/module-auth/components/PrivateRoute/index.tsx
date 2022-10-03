/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { useEffect, ReactElement } from 'react';
import { useNavigate, RouteProps, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

interface Props extends RouteProps {
    meId: string;
    element: ReactElement;
    type?: string;
}

function PrivateRoute(props: Props) {
    const { meId, element, type } = props;
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!meId) {
            if (type !== 'auth') {
                const { pathname, search } = location;
                window['tola-prev-route'] = pathname + search;
                navigate('/signin', { replace: true });
            }
        } else {
            navigate(window['tola-prev-route'] || '/home', { replace: true });
        }
    }, [meId]);

    if (type === 'auth' || meId) {
        return element;
    }

    return null;
}

const mapStateToProps = ({ auth }: any) => {
    const { meId } = auth;
    return { meId };
};

export default connect(mapStateToProps)(PrivateRoute);
