import Offcanvas from "react-bootstrap/Offcanvas"
import Container from "react-bootstrap/Container"
import { CartContext } from "../CartContext"
import { useContext } from "react"
import Cart from "./Cart"
import Button from "react-bootstrap/esm/Button"


const OffcanvasCart = ({ showOffcanvasCart, handleOffcanvasCartClose, items }) => {
    const cart = useContext(CartContext)

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
    
    //  const cartItems = items?.filter((cartProduct) => {
    //     return cartProduct._id === id
    //   })

    return (
        <>
            <Offcanvas show={showOffcanvasCart} onHide={handleOffcanvasCartClose} placement='end'>
                <Container>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>CART</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <h5>Subtotal ${cart.getTotalCost()}</h5>
                    { productsCount > 0 ? 
                        <>
                            <p>Items in Cart:</p>
                            {cart.items.map(product => (
                                <Cart items={items} quantity={product.quantity} id={product.id} />
                            ))}
                            <p>Total Items in Cart: {productsCount}</p>
                           
                            <Button variant="success">Purchase Items</Button>
                        </>
                    :
                        <p>There are no items in your cart. Buy something, don't be cheap</p>
                }
                </Offcanvas.Body>
                </Container>
            </Offcanvas>
        </>
    )
}

export default OffcanvasCart