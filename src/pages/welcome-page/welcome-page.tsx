import CardPlace from '../../components/card-place/card-place';
import HeaderNavigation from '../../components/header-navigation/header-navigation';
import Header from '../../components/header/header';


type WelcomePageProps = {
  allCityList: string[];
  sortTypePlace: string[];
};

function WelcomePage({ allCityList, sortTypePlace}: WelcomePageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header>
        <HeaderNavigation/>
      </Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {allCityList.map((item) => (
                <li key={item} className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
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
                <CardPlace />
                <CardPlace />
                <CardPlace />
                <CardPlace />
                <CardPlace />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WelcomePage;
