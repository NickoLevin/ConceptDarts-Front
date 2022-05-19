import React from 'react'
import logo1 from '../images/logo1'
import 'bootstrap/dist/css/bootstrap.min.css';



function Welcome () {
  return (
    <div>
        <div className='Mainlogo'>
            <img src={logo1} alt='logo'/>
            <p>Добро пожаловать в Concept Darts</p>
        </div>
        <div className='WelcomeButtons'>
        <Button variant="primary">Войти</Button>
        <Button variant="primary">Регистрация</Button>
        </div>
    </div>
  )
}

export default Welcome