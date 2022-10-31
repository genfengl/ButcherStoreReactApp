import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const OffcanvasNav = ({ showOffcanvasNav, handleOffcanvasClose }) => {
    return (
            <Offcanvas show={showOffcanvasNav} onHide={handleOffcanvasClose}>
                <Container>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><b>SHOP</b></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className='d-flex flex-column'>
                        <Nav.Link as={Link} to='/api/butcher' onClick={handleOffcanvasClose} >
                            <b>Home</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/all' onClick={handleOffcanvasClose} >
                            <b>All Products</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/beef' onClick={handleOffcanvasClose} >
                            <b>Beef</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/pork' onClick={handleOffcanvasClose} >
                            <b>Pork</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/poultry' onClick={handleOffcanvasClose} >
                            <b>Poultry</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/lamb' onClick={handleOffcanvasClose} >
                            <b>Lamb</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/seafood' onClick={handleOffcanvasClose} >
                            <b>Seafood</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/login' onClick={handleOffcanvasClose} >
                            <b>Login</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/register' onClick={handleOffcanvasClose} >
                            <b>Register</b>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Container>
            </Offcanvas>
    )
}

export default OffcanvasNav