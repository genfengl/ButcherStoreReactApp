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
                <Offcanvas.Header closeButton className='border-bottom border-3'>
                    <Offcanvas.Title className='fs-1 fw-bold text-center py-2 text-butcher'>SHOP</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className='d-flex flex-column'>
                        <Nav.Link as={Link} to='/api/butcher' onClick={handleOffcanvasNavClose} className='text-butcher'>
                            <b>Home</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/all' onClick={handleOffcanvasNavClose} className='text-butcher'>
                            <b>All Products</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/beef' onClick={handleOffcanvasNavClose} className='text-butcher'>
                            <b>Beef</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/pork' onClick={handleOffcanvasNavClose} className='text-butcher'>
                            <b>Pork</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/poultry' onClick={handleOffcanvasNavClose} className='text-butcher'>
                            <b>Poultry</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/lamb' onClick={handleOffcanvasNavClose} className='text-butcher'>
                            <b>Lamb</b>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/seafood' onClick={handleOffcanvasNavClose} className='text-butcher'>
                            <b>Seafood</b>
                        </Nav.Link>
                        {user ?
                            (<Nav.Link as={Link} to='/api/butcher/' onClick={handleOffcanvasNavClose} className='text-butcher'>
                                <LogoutButton setUser={setUser} />
                            </Nav.Link>) : (<Nav.Link as={Link} to='/api/butcher/login' onClick={handleOffcanvasNavClose} className='text-butcher'>
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