import React from 'react'
import { Button, Form } from 'react-bootstrap'
import profile from '../images/profile.sbg'
import 'bootstrap/dist/css/bootstrap.min.css';


function Registration() {
    return (
        <div>
            <div className='header--registrarion'>
                <img src={logo1} alt='logo' className='Logo--small' />
                <p>Concept Darts</p>
            </div>
            <div className='form--registration'>
                <p>Регистрация</p>
                <img src={profile} alt='profile' className='Profile--registration' />
                <Button variant='primary'>Добавить фото </Button>
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" placeholder="Введите ваше Имя" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSurname">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control type="text" placeholder="Введите вашу Фамилию" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNikname">
                        <Form.Label>Имя пользователя</Form.Label>
                        <Form.Control type="text" placeholder="Введите Имя пользователя" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Номер телефона</Form.Label>
                        <Form.Control type="text" placeholder="Введите телефон" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>Город</Form.Label>
                        <Form.Control type="text" placeholder="Введите город" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPasswordCheck">
                        <Form.Label>Повторите пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Остаться в системе" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Зарегистрироваться
                    </Button>
                </Form>
            </div>

        </div>
    )
}

export default Registration