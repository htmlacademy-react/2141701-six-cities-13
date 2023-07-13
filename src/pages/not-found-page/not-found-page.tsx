import {Link} from 'react-router-dom';

import {AppRoute} from '../../constants';
import HelmetMetaTag from '../../components/helmet-meta-tag/helmet-meta-tag';

function NotFoundPage() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <HelmetMetaTag >
      <title>6 cities: NotFoundPage </title>
      </HelmetMetaTag>
      <h2 style={{fontSize: '200px', marginBottom: '0px'}}>404</h2>
      <h3 style={{fontSize: '40px'}}>Страница не найдена</h3>
      <Link to={AppRoute.Main} style={{fontSize: '20px', border: '1px solid', borderRadius: '8px', padding: '8px', color: 'white', backgroundColor: 'black' }}>На главную</Link>
    </div>
  );
}

export default NotFoundPage;
