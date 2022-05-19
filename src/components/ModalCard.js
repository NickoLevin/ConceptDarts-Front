import React from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function ModalCard() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Станислав Барецкий</Card.Title>
                    <Card.Text>
                       Какой-то текст
                    </Card.Text>
                    <Button variant="primary">Открыть полностью</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ModalCard