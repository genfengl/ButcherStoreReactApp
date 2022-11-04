import Button from "react-bootstrap/esm/Button"
import { useContext } from "react"
import { CartContext } from "../CartContext"

const CheckoutButton = () => {
    const cart = useContext(CartContext)

    const handleCheckoutClick = async () => {
        const res = await fetch('/butcher/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: [{
                    items: cart.items
                }]
            })
        })
        const url = await res.json()

        if (url) {
            window.location.assign(url.url)
            // console.log(url)
        } else {
            console.log('error', url)
        }
    }

    return <Button className="w-100 border-0 rounded-0 my-3 fs-5 fw-bold p-1 text-light text-center" variant="butcher" onClick={handleCheckoutClick}>CHECK OUT</Button>





}

export default CheckoutButton