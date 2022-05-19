import React from 'react'
import {Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <div>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Concept Darts</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Лента</Nav.Link>
      <Nav.Link href="#features">Мир</Nav.Link>
      <Nav.Link href="#pricing">Публикация</Nav.Link>
      <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Поиск"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary">Поиск</Button>
            </Form>
        <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Profile"
      />
    </Navbar.Brand>

    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Header