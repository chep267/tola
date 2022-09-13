import React, { useEffect } from 'react';
import { useNavigate, Route, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

// Utils
import localStorage from 'modules/module-base/utils/localStorage';

interface Props extends RouteProps {
    meId: string;
}

function PrivateRoute(props: Props) {
    const { meId, ...otherProps } = props;
    const navigate = useNavigate();

    useEffect(() => {
        if (!meId) {
            localStorage.set('prevRoute', `${otherProps.path}`);
            navigate('/login', { replace: true });
        }
    }, [meId]);

    return meId ? <Route {...otherProps} /> : null;
}

const mapStateToProps = ({ login }: any) => {
    const { meId } = login;
    return { meId };
};

export default connect(mapStateToProps)(PrivateRoute);
