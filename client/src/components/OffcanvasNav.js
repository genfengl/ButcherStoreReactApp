import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import LogoutButton from "./LogoutButton"

const OffcanvasNav = ({ showOffcanvasNav, handleOffcanvasNavClose, user, setUser }) => {
    return (
        <Offcanvas show={showOffcanvasNav} onHide={handleOffcanvasNavClose}>
            <Container>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><b>SHOP</b></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className='d-flex flex-column'>
                        <Nav.Link as={Link} to='/api/butcher' onClick={handleOffcanvasNavClose} >
                            <b>Home</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/all' onClick={handleOffcanvasNavClose} >
                            <b>All Products</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/beef' onClick={handleOffcanvasNavClose} >
                            <b>Beef</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/pork' onClick={handleOffcanvasNavClose} >
                            <b>Pork</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/poultry' onClick={handleOffcanvasNavClose} >
                            <b>Poultry</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/lamb' onClick={handleOffcanvasNavClose} >
                            <b>Lamb</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/seafood' onClick={handleOffcanvasNavClose} >
                            <b>Seafood</b>
                        </Nav.Link>
                        {user ?
                            (<Nav.Link as={Link} to='/api/butcher/' onClick={handleOffcanvasNavClose} >
                                <LogoutButton setUser={setUser} />
                            </Nav.Link>) : (<Nav.Link as={Link} to='/api/butcher/login' onClick={handleOffcanvasNavClose} >
                            <b>Login/Register</b>
                        </Nav.Link>)
                        }

                        {/* <Nav.Link as={Link} to='/api/butcher/register' onClick={handleOffcanvasNavClose} >
                            <b>Register</b>
                        </Nav.Link> */}
                    </Nav>
                </Offcanvas.Body>
            </Container>
        </Offcanvas>
    )
}

export default OffcanvasNav