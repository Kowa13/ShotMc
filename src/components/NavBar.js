import {Navbar, Container, Nav}  from 'react-bootstrap';
import CartWidget from './CartWidget';
import './CartWidget.css';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    ShotMc
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#hamburguesas">Hamburguesas</Nav.Link>
                    <Nav.Link href="#bebidas">Bebidas</Nav.Link>
                    <Nav.Link href="#extras">Extras</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;