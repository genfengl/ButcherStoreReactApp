import Offcanvas from "react-bootstrap/Offcanvas"
import Container from "react-bootstrap/Container"

const OffcanvasCart = ({ showOffcanvasCart, handleOffcanvasCartClose }) => {
    return (
        <>
            <Offcanvas show={showOffcanvasCart} onHide={handleOffcanvasCartClose} placement='end'>
                <Container>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>CART</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Cart items go here
                </Offcanvas.Body>
                </Container>
            </Offcanvas>
        </>
    )
}

export default OffcanvasCart