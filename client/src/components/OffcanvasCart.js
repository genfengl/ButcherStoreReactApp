import Offcanvas from "react-bootstrap/Offcanvas"
import Container from "react-bootstrap/Container"
import { CartContext } from "../CartContext"
import { useContext } from "react"
import Cart from "./Cart"
import Button from "react-bootstrap/esm/Button"
import Row from "react-bootstrap/esm/Row"


const OffcanvasCart = ({ showOffcanvasCart, handleOffcanvasCartClose, items }) => {
    const cart = useContext(CartContext)

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    return (
        <>
            <Offcanvas show={showOffcanvasCart} onHide={handleOffcanvasCartClose} placement='end'>
                <Container>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className='fs-1 fw-bold text-center py-2'>CART</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="d-flex justify-content-between">
                            <div className="lead">Subtotal </div>
                            <div className="lead">${cart.getTotalCost()}</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="text-muted">Total Items in Cart </div>
                            <div className="text-muted">{productsCount}</div>
                        </div>

                        <div className="border-top border-3">
                            {productsCount > 0 ?
                                <>
                                    {cart.items.map(product => (
                                        <Cart items={items} quantity={product.quantity} id={product.id} />
                                    ))}
                                    <Button variant="success">Purchase Items</Button>
                                </>
                                :
                                <p>There are no items in your cart. Buy something, don't be cheap</p>
                            }
                        </div>
                    </Offcanvas.Body>
                </Container>
            </Offcanvas>
        </>
    )
}

export default OffcanvasCart