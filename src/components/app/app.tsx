import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type AppScreenProps = {
  allCityList: string[];
  sortTypePlace: string[];
};

function App({ allCityList, sortTypePlace }: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen allCityList={allCityList} sortTypePlace={sortTypePlace} />
  );
}

export default App;
