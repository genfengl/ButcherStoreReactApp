import Button from "react-bootstrap/esm/Button"
import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { CartContext } from "../CartContext"


//need to be styled to have no li styles showing no dotpoint

const handleFavourite = (event) => {

}

const Show = () => {
    const [item, setItem] = useState(null)
    const { id } = useParams()
    const cart = useContext(CartContext)
    useEffect(() => {
        const getItem = async () => {
          const res = await fetch(`/api/butcher/${id}`)
          const data = await res.json()
          setItem(data)
        }
        getItem()
      }, [id])

    return (
        <div className="item-show">
        
        <br />
        <h2> {item?.title} </h2>
        <img src={item?.imageURL} alt={item?.title}/>
        <div>
            <ul className="details-list">
                <li>${item?.price}</li>
                <li>{item?.description}</li>
                <li>{item?.category}</li>
                {item?.stock === 0 ? <li>Sorry, we have no stock remaining</li> : <li>We have {item?.stock} in stock!</li>} </ul> 
                <Button onClick={() => cart.addOneToCart(item._id)} variant='outline-dark'>Add to Cart</Button>
                <Button onClick={handleFavourite} variant='outline-dark'>Favourite</Button>
        </div>
        </div>
    )
}

export default Show