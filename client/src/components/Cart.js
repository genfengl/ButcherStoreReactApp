import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { CartContext } from "../CartContext"
import { useContext } from "react"
import Catalogue from "./Catalogue"
import { FaTrash } from "react-icons/fa"


const Cart = ({ items, quantity, id }) => {
    const cart = useContext(CartContext)

    //**** Would prefer to use the reduce method here ***
    const cartItems = items?.filter((cartProduct) => {
        return cartProduct._id === id
    })

    // //    Calculating total price of each product
    //   const total = cartItems.reduce((acc, curr) => {
    //         return acc + curr.price * quantity
    //   }, 0)


    return (
        <div className="py-3">

            {cartItems.map((item) => {
                return (
                    <Card key={item.title} className=" border-0">
                        <Row>
                            <Col xs={3}>
                                <img src={item.imageURL}
                                    style={{
                                        height: '80px',
                                        width: '80px'
                                    }}
                                />
                            </Col>
                            <Col xs={9}>
                                <Row className="mb-3">
                                    <Col xs={9}>
                                        {item.title}                                        
                                    </Col>
                                    <Col xs={3} className="d-flex justify-content-end">
                                        x{quantity}
                                    </Col>
                                </Row>
                                <Row className="d-flex align-items-center">
                                    <Col xs={6} className="text-muted">
                                        ${item.price} each
                                    </Col>
                                    <Col xs={6} className="d-flex justify-content-end lead">
                                        ${quantity * item.price}
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                        <Row className="mt-2 ms-1">
                            <Col xs={3}>
                            </Col>
                            <Col xs={2} className=" text-center fw-bold border-top border-start border-bottom border-1 border-dark">
                                <Button variant="none" className="fs-5"
                                    onClick={() => cart.removeOneFromCart(item._id)}>
                                    -
                                </Button>
                            </Col>
                            <Col xs={2} className=" text-center d-flex align-items-center justify-content-center border-top border-bottom border-1 border-dark">
                                <div>{quantity}</div>
                            </Col>
                            <Col xs={2} className="text-center fw-bold border-top border-end border-bottom border-1 border-dark">
                                <Button variant="none" className="fs-5"
                                    onClick={() => cart.addOneToCart(item._id)}>
                                    +
                                </Button>
                            </Col>
                            
                            <Col xs={3} className="d-flex justify-content-end">
                                <Button variant="none" className="p-0"
                                    onClick={() => cart.deleteFromCart(item._id)}><FaTrash /></Button>
                            </Col>



                        </Row>


                        {/* <p>Total: ${total}</p> */}

                    </Card>
                )
            })}
        </div>
    )
}

export default Cart