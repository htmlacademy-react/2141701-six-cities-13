import SignIn from '../../components/sign-in/sign-in';
import SignOut from '../../components/sign-out/sign-out';
import { AuthorizationStatus } from '../../constants';
import { useAppSelector } from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selector';

function HeaderNavigation() {
 const authorization = useAppSelector(getAuthorizationStatus);

  return (
    <nav className="header__nav">
    <ul className="header__nav-list">
    { authorization === AuthorizationStatus.Auth
     ? <SignOut />
     : <SignIn/>}
    </ul>
    </nav>
  );
}

export default HeaderNavigation;
