import Button from "react-bootstrap/esm/Button"
import { useContext } from "react"
import { CartContext } from "../CartContext"

const CheckoutButton = () => {
    const cart = useContext(CartContext)

    const handleCheckoutClick = async () => {
        const res = await fetch('/api/butcher/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: cart.items
            }) 
        })
        const url = await res.json()
        console.log(url)
        // if (res.ok) {
        //     window.location = data
        // } else  {
        //     console.log(url)
        // }
        

    }

    return <Button variant="success" onClick={handleCheckoutClick}>Purchase Items</Button>

}

export default CheckoutButton