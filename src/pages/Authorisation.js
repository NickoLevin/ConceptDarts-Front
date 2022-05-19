import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Authorisation() {
    return (
        <div>
            <div className='header--registrarion'>
                <img src={logo1} alt='logo' className='Logo--small' />
                <p>Concept Darts</p>
            </div>
            <div className='form--auth'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicAuthEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Введите Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAuthPassword">
                        <Form.Label>пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" />
                    </Form.Group>
                    <Form.Text className="text-muted">
                        <a href='#' className='changepassword'>Забыли пароль?</a>
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicAuthCheckbox">
                        <Form.Check type="checkbox" label="Остаться в системе" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Войти
                    </Button>
                </Form>
            </div>
            <div className='Auth--registration'>
                <p>Еще нет аккаунта?</p>
                <Button variant='primary'>Зарегистрировтаься</Button>
            </div>
        </div>
    )
}

export default Authorisation