import { Link } from 'react-router-dom';

import {AppRoute} from '../../constants';

function SignIn() {
  return (
    <li className="header__nav-item">
        <Link className="header__nav-link" to={AppRoute.Login}>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__signout">Sign in</span>
        </Link>
    </li>
  );
}

export default SignIn;
