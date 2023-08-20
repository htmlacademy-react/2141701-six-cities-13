import { Helmet } from 'react-helmet-async';
import {useState, ChangeEvent, FormEvent} from 'react';
import { Link } from 'react-router-dom';
import {useEffect} from 'react';

import Header from '../../components/header/header';
import {loginAction} from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { AppRoute, getRandomItem, CITIES} from '../../constants';
import {changeCity} from '../../store/offers-process/offers-process.slice';

function LoginPage(): JSX.Element {
  const currenCity = getRandomItem(CITIES);
  const dispatch = useAppDispatch();

 const [valueForm, setValueForm] = useState({
  email: '',
  password: ''
 });

 const handleFieldChange = (evt: ChangeEvent<HTMLInputElement>)=> {
  const {name, value} = evt.target;
  setValueForm({...valueForm, [name]: value});
};

const handlerSubmit = (evt: FormEvent) => {
  evt.preventDefault();

  if(valueForm.email && valueForm.password){
    dispatch(loginAction(valueForm));
  }
};

useEffect(() => {
  dispatch(changeCity(currenCity));
}, []);

  return (
    <div className="page page--gray page--login">
      <Helmet>
      <title>6 cities: authorization</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handlerSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                 onChange={handleFieldChange}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={valueForm.email}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                onChange={handleFieldChange}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={valueForm.password}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
              Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>{currenCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
