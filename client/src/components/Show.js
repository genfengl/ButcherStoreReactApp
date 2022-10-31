import Button from "react-bootstrap/esm/Button"
import Header from "./Header"

//need to be styled to have no li styles showing no dotpoint

const handleAddToCart = (event) => {

}

const Show = ({ item }) => {
    return (
        <div className="item-show">
        <Header />
        <br />
        <h2> {item.title} </h2>
        <img src={item.image} alt={item.title}/>
        <div>
            <ul className="details-list">
                <li>${item.price}</li>
                <li>{item.description}</li>
                <li>{item.category}</li>
                (item.stock === 0 ? <li>Sorry, we have no stock remaining</li> : <li>We have {item.stock} in stock!</li> </ul> <Button onClick={handleAddToCart} variant='outline-dark'>Add to Cart</Button>)
        </div>
        </div>
    )
}

export default Show