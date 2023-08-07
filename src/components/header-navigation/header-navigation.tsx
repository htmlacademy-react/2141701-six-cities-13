import SignIn from '../../components/sign-in/sign-in';
import SignOut from '../../components/sign-out/sign-out';
import { AuthorizationStatus } from '../../constants';
import { useAppSelector } from '../../hooks';

function HeaderNavigation() {
 const authorization = useAppSelector((state) => state.authorizationStatus);

  return (
    <nav className="header__nav">
    <ul className="header__nav-list">
    { authorization === AuthorizationStatus.Auth
     ? <SignOut/>
     : <SignIn/>}
    </ul>
    </nav>
  );
}

export default HeaderNavigation;
