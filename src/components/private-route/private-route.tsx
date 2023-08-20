import {Navigate} from 'react-router-dom';

import {AuthorizationStatus} from '../../constants';
import Preloader from '../preloader/preloader';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}


function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Preloader/>;
  }

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return children;
  }

  return <Navigate to="/login" />;
}

export default PrivateRoute;
