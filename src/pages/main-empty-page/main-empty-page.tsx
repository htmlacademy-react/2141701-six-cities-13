import Header from '../../components/header/header';
import HeaderNavigation from '../../components/header-navigation/header-navigation';
import {useAppSelector} from '../../hooks/index';
import CityList from '../../components/city-list/city-list';
import {getCurrentCity} from '../../store/offers-process/offers-process.selector';

function MainEmptyPage() {
  const currentCity = useAppSelector(getCurrentCity);

  return (
    <div className="page page--gray page--main">
      <Header>
        <HeaderNavigation/>
      </Header>
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
      <CityList currentCity={currentCity}/>
      </div>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">
                We could not find any property available at the moment in {currentCity.name}
              </p>
            </div>
          </section>
          <div className="cities__right-section" />
        </div>
      </div>
    </main>
    </div>
  );
}

export default MainEmptyPage;
