import {Link} from 'react-router-dom'
import './SignIn.scss'

export default function SignIn() {
  return (
    <div className='sign-in'>

       <div className='sign-in__header'>
            <Link className='logo' to="/">
                <img className='logo__image' src="assets/images/start__logo.png" alt="Concept Darts" />
                <p className='logo__text'>Concept Darts</p>
            </Link>
        </div>

        <div className='sign-in__content'>
            <h1 className='sign-in__heading'>Вход</h1>
            <form action="" className='login-form'>
                <label htmlFor=""  className='login-form__label'>
                    Email
                    <input type="email" className='login-form__input'/>
                </label>

                <label htmlFor="" className='login-form__label'>
                    Пароль
                    <input type="password" className='login-form__input'/>
                </label>

                <Link to="/" className='forgot-password-link'>Забыли пароль?</Link>

                <button className='login-form__button'>Войти</button>
            </form>

            <div className='sign-in__links'>
                <Link to="/sign-up" className='sign-in__first-link'>Еще нет аккаунта?</Link>
                <Link to="/sign-up" className='sign-in__second-link'>Зарегистрироваться</Link>
            </div>

        </div>
    </div>
  )
}
