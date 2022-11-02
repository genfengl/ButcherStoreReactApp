import Button from "react-bootstrap/esm/Button"
import { CartContext } from "../CartContext"
import { useContext } from "react"


const Cart = ({ items, quantity, id } ) => {
    const cart = useContext(CartContext)

    //**** Would prefer to use the reduce method here ***
    const cartItems = items?.filter((cartProduct) => {
        return cartProduct._id === id
       })
       
    //    Calculating total price of each product
      const total = cartItems.reduce((acc, curr) => {
            return acc + curr.price * quantity
      }, 0)
      

    return (
        
        <div className="cart-dropdown">
            {cartItems.map((item) => {
                return (
                    <>
                     <h5>{item.title}</h5>
                     {/* <img src={item.imageURL}/> */}
                     <p>Qty: {quantity}</p>
                     <p>Price: ${item.price}</p>
                     {/* <p>Total: ${total}</p> */}
                     <Button sm="6" onClick={() => cart.addOneToCart(item._id)} className="mx-2">+</Button>
                     <Button sm="6" onClick={() => cart.removeOneFromCart(item._id)} className="mx-2">-</Button>
                     <Button variant="danger" onClick={() => cart.deleteFromCart(item._id)}>Remove Item</Button>
                     <h5>Total: {cart.getTotalCost()}</h5>
                    </>
                   )
               })}
           </div>
    )
}

export default Cart