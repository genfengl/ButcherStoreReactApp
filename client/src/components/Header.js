import 'bootstrap/dist/css/bootstrap.min.css';
import LogoutButton from './LogoutButton';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useState } from 'react';


const Header = ({ handleOffcanvasNavShow, handleOffcanvasCartShow, user, setUser }) => {
    const handleHamburgerClick = () => {
        handleOffcanvasNavShow()
    }
    const handleCartClick = () => {
        handleOffcanvasCartShow()
    }

    return (
        // set collapseOnSelect to make the NavBar collapse automatically when the user selects an item
        <Navbar collapseOnSelect className='p-3 d-flex align-items-center justify-content-between' variant='dark' bg='butcher' expand='md' sticky='top'>
            <Container>
                {/* use aria-controls to toggle the nav within navbar.collapse using the id */}
                {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
                <Button className="d-md-none text-light" variant='none' onClick={handleHamburgerClick} ><GiHamburgerMenu /></Button>
                <Navbar.Collapse id='basic-navbar-nav' >
                    <Nav className='order-md-2 fs-6'>
                        
                        <Nav.Link as={Link} to='/api/butcher/beef' >
                            BEEF
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/pork'>
                            PORK
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/poultry'>
                            POULTRY
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/lamb'>
                            LAMB
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/seafood'>
                            SEAFOOD
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand className='fw-bold fs-3 order-md-first ms-4 me-0 mx-md-3' as={Link} to='/api/butcher'>
                    <img src="/logo.png" style={{
                        height:'48px'
                    }}/>
                </Navbar.Brand>
                <Nav className='d-flex flex-row gap-1 me-3 order-last align-items-center'>
                    <Nav.Link as={Link} to='/api/butcher/search' className="text-light d-flex">
                        <FaSearch />
                    </Nav.Link>
                    {user?.isAdmin && <Nav.Link as={Link} to="/api/butcher/add">Add Product</Nav.Link>}
                    {user ? (<Nav.Link className="d-none d-md-flex text-light align-items-center gap-1" as={Link} to='/api/butcher/profile'>
                        <FaUser />
                        {user.username}
                    </Nav.Link>) :
                        (<Nav.Link className="d-none d-md-flex text-light align-items-center gap-1" as={Link} to='/api/butcher/login'>
                            <FaUser />
                        </Nav.Link>)}
                    {/* <Nav.Link className="d-none d-md-block" as={Link} to='/api/butcher'>
                        {user && <LogoutButton setUser={setUser} />}
                    </Nav.Link> */}
                    <Nav.Link as={Link} onClick={handleCartClick} className="text-light d-flex">
                        <FaShoppingCart />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header