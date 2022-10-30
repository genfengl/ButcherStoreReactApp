import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Header = ({ handleOffcanvasShow }) => {
    const handleHamburgerClick = () => {
        handleOffcanvasShow()
    }
    return (
        // set collapseOnSelect to make the NavBar collapse automatically when the user selects an item
        <Navbar collapseOnSelect className='p-3 d-flex align-items-center justify-content-between' variant='light' bg='light' expand='md' sticky='top'>
            <Container>
                {/* use aria-controls to toggle the nav within navbar.collapse using the id */}
                {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
                <Button variant='light' onClick={handleHamburgerClick} ><GiHamburgerMenu /></Button>
                <Navbar.Collapse id='basic-navbar-nav' >
                    <Nav className='order-md-2'>
                        <Nav.Link as={Link} to='/api/butcher' >
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/beef' >
                            Beef
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/pork'>
                            Pork
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/poultry'>
                            Poultry
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/lamb'>
                            Lamb
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/seafood'>
                            Seafood
                        </Nav.Link>
                        {/* Maybe move the login and register links to the profile page?
                        if (!user) show login page with register option, if (user) show profile page */}
                        <Nav.Link as={Link} to='/api/butcher/login'>
                            L
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/register'>
                            Reg
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand className='order-md-first me-0 me-md-3' as={Link} to='/api/butcher'>
                    Butcher
                </Navbar.Brand>
                <Nav className='d-flex flex-row gap-2 order-last'>
                    <Nav.Link as={Link} to='/api/butcher/search'>
                        <FaSearch />
                    </Nav.Link>
                    {/* Conditional Rendering if (user) return profile, else return login & register */}
                    <Nav.Link as={Link} to='/api/butcher/profile'>
                        <FaUser />
                    </Nav.Link>
                    <Nav.Link as={Link} to='/api/butcher/cart' >
                        <FaShoppingCart />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header