import {Navbar, Container, Nav}  from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>ShotMc</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/category/hamburguesas'>Hamburguesas</Nav.Link>
                    <Nav.Link as={Link} to='/category/bebidas'>Bebidas</Nav.Link>
                    <Nav.Link as={Link} to='/category/extras'>Extras</Nav.Link>
                    <Nav.Link as={Link} to='/category/contacto'>Contacto</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;