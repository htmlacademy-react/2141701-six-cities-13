import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import {AppRoute} from '../../constants';
import Header from '../../components/header/header';

function NotFoundPage(): JSX.Element {
return (
<>
  <div className="page__favorites-container container">
  <Helmet >
  <title>6 cities: NotFoundPage </title>
  </Helmet>
  <Header/>
    <section className="favorites favorites--empty">
      <div className="favorites__status-wrapper">
        <b className="favorites__status">404 page not found !</b>
      </div>
    </section>
  </div>
  <footer className="footer">
    <Link className="footer__logo-link" to={AppRoute.Main}>
      <img
        className="footer__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={64}
        height={33}
      />
    </Link>
  </footer>
</>
);
}

export default NotFoundPage;
