import {NavLink} from 'react-router-dom'
import './Welcome.scss'

export default function Welcome() {
  return (
    <div className='welcome'>

      <div className='img-container'>
        <p className='img-container__text'>Concept Darts</p>
        <img className='img-container__image' src="assets/images/start__logo.png" alt="Concept Darts"/>
      </div>

      <p className='welcome__text'>Добро пожаловать!</p>

      <div className='welcome__navigation'>
        <NavLink to="sign-in" className='welcome__nav-link'>Войти</NavLink>
        <NavLink to="sign-up" className='welcome__nav-link'>Зарегистрироваться</NavLink>
      </div>
    </div>
  )
}
