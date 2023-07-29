import {useAppSelector} from '../../hooks/index';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import HeaderNavigation from '../../components/header-navigation/header-navigation';
import Header from '../../components/header/header';
import CityList from '../../components/city-list/city-list';

type WelcomePageProps = {
  sortTypePlace: string[];
};

function WelcomePage({sortTypePlace}: WelcomePageProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  const allOffers = useAppSelector((state) => state.offers);
  const currentOffers = allOffers.filter((item) => item.city.title === currentCity);

  return (
    <div className="page page--gray page--main">
      <Header>
        <HeaderNavigation/>
      </Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList currentCity={currentCity}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  {sortTypePlace.map((item) => (<li key={item}
                    className="places__option places__option--active"
                    tabIndex={0}
                                                >
                    {item}
                                                </li>))}
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CardList currentOffers={currentOffers} cardNameClass={'cities'}/>
              </div>
            </section>
            <div className="cities__right-section">
             <Map currentOffers={currentOffers} mapClassName={'cities__map'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WelcomePage;
