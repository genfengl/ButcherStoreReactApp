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
        

        

        // .then(res => {
        //     if (res.ok) return res.json()
        //     return res.json().then(json => Promise.reject(json))
        // }).then(({ url }) => {
        //     console.log(url)
        // })

        

    
        
        // .then((response) => {
        //     console.log(response)
        //     return response.json();
            
        // }).then((response) => {
        //     if (response.url) {
        //         window.location.assign(response.url)
        //     }
        // })
        
        

    }

    return <Button variant="success" onClick={handleCheckoutClick}>Purchase Items</Button>

}

export default CheckoutButton