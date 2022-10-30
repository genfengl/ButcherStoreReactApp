import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        // set collapseOnSelect to make the NavBar collapse automatically when the user selects an item
        <Navbar collapseOnSelect className='p-3 d-flex align-items-center' variant='light' bg='light' expand='md' sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to='/api/butcher'>
                    Butcher
                </Navbar.Brand>
                {/* use aria-controls to toggle the nav within navbar.collapse using the id */}
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' >
                    <Nav>
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
                        <Nav.Link as={Link} to='/api/butcher/seafood'>
                            Seafood
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/login'>
                            Login
                        </Nav.Link>
                        <Nav.Link as={Link} to='/api/butcher/register'>
                            Register
                        </Nav.Link>
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
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header