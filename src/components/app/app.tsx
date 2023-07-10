import WelcomePage from '../../pages/welcome-page/welcome-page';

type AppScreenProps = {
  allCityList: string[];
  sortTypePlace: string[];
};

function App({ allCityList, sortTypePlace }: AppScreenProps): JSX.Element {
  return (
    <WelcomePage allCityList={allCityList} sortTypePlace={sortTypePlace} />
  );
}

export default App;
