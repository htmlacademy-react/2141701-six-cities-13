import { MemoryHistory, createMemoryHistory } from 'history';
import App from './app';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import { AppRoute, AuthorizationStatus, makeScrollMock } from '../../constants';
import { render, screen} from '@testing-library/react';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "WelcomePage" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Main);
    makeScrollMock();
    render(withStoreComponent);

    expect(screen.getByText(/places to stay/i)).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore());

    mockHistory.push(AppRoute.Login);
    makeScrollMock();
    render(withStoreComponent);

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render "FavoritesPage" when user navigate to "/favorites"', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore({USER: { authorizationStatus: AuthorizationStatus.Auth },}));

    mockHistory.push(AppRoute.Favorites);
    makeScrollMock();
    render(withStoreComponent);

    expect(screen.getByText(/Saved/i)).toBeInTheDocument();
  });


  // it('should render "OfferPage" when user navigate to "/offer/:id"', () => {
  //   const withHistoryComponent = withHistory(<App/>, mockHistory);
  //   const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore());
  //   mockHistory.push(`${AppRoute.Offer}/:id`);
  //   makeScrollMock();
  //   render(withStoreComponent);

  //   expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
  // });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    const withHistoryComponent = withHistory(<App/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore());

    const unknownRoute = '/unknown-route';
    mockHistory.push(unknownRoute);
    makeScrollMock();
    render(withStoreComponent);

    expect(screen.getByText(/404 page not found/i)).toBeInTheDocument();
  });

});
