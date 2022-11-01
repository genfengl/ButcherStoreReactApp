import Button from "react-bootstrap/esm/Button"
import { CartContext } from "../CartContext"
import { useContext } from "react"


const Cart = ({ items, quantity, id } ) => {
    const cart = useContext(CartContext)

    //**** Would prefer to use the reduce method here ***
    const cartItems = items?.filter((cartProduct) => {
        return cartProduct._id === id
       })
       
      //Needs Bootstrap touch up 
    return (
        // maybe just do the totalcost function in here?
        <div className="cart-dropdown">
            {cartItems.map((item) => {
                console.log(item.price)
                return (
                    <>
                     <h5>{item.title}</h5>
                     {/* <img src={item.imageURL}/> */}
                     <p>Qty: {quantity}</p>
                     <p>Price: ${item.price}</p>
                     <p>Total: ${cart.getTotalCost}</p>
                     <Button sm="6" onClick={() => cart.addOneToCart(item._id)} className="mx-2">+</Button>
                     <Button sm="6" onClick={() => cart.removeOneFromCart(item._id)} className="mx-2">-</Button>
                     <Button variant="danger" onClick={() => cart.deleteFromCart(item._id)}>Remove Item</Button>
                     {/* <h5>Total: {cart.getTotalCost(item.price)}</h5> */}
                    </>
                   )
               })}
           </div>
    )
}

export default Cart