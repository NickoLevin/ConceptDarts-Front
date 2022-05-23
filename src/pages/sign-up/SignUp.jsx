import { Link } from 'react-router-dom'
import './SignUp.scss'

export default function SignUp() {
  return (
    <div className='sign-up'>
        <div className='sign-up__header'>
            <Link className='logo' to="/">
                <img className='logo__image' src="assets/images/start__logo.png" alt="Concept Darts" />
                <p className='logo__text'>Concept Darts</p>
            </Link>
        </div>

        <div className='sign-up__content'>
            <h1 className='sign-up__heading'>Регистрация</h1>

            <form action="" className='reg-form'>
                <div className='load-photo'>
                    <img src="assets/images/reg__photo.svg" alt="выфв"  className='file-input__image'/>
                    <label htmlFor="upload-photo"  className='reg-form__label file-input__label'>
                        Добавить
                        <input type="file" className='reg-form__input file-input' id='upload-photo'/>
                    </label>
                </div>

                <label htmlFor=""  className='reg-form__label'>
                    Имя
                    <input type="text" className='reg-form__input'/>
                </label>

                <label htmlFor="" className='reg-form__label'>
                    Фамилия
                    <input type="text" className='reg-form__input'/>
                </label>

                <label htmlFor=""  className='reg-form__label'>
                    Логин
                    <input type="text" className='reg-form__input'/>
                </label>

                <label htmlFor="" className='reg-form__label'>
                    Email
                    <input type="email" className='reg-form__input'/>
                </label>

                <label htmlFor=""  className='reg-form__label'>
                    Номер телефона
                    <input type="text" className='reg-form__input'/>
                </label>

                <label htmlFor="" className='reg-form__label'>
                    Город
                    <input type="text" className='reg-form__input'/>
                </label>

                <label htmlFor=""  className='reg-form__label'>
                    Пароль
                    <input type="password" className='reg-form__input'/>
                </label>

                <label htmlFor="" className='reg-form__label'>
                    Повторите пароль
                    <input type="password" className='reg-form__input'/>
                </label>

                <button className='reg-form__button'>Зарегистрироваться</button>
            </form>
        </div>
    </div>
  )
}
