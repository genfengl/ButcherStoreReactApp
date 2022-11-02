import ProgressBar from "react-bootstrap/ProgressBar"
import Container from "react-bootstrap/Container"
import Cart from "./Cart"

const CartProgressBar = ({currentPrice}) => {
    return (
        <Container>
            <ProgressBar variant="success" now={currentPrice/600*100} className="mb-2"/>
            {currentPrice < 600 ? 
            (<div className="text-muted">Spend ${600-currentPrice} more for free shipping!</div>) : 
            (<div className="color-butcher text-success">Congragulations! You gained free shipping!</div>)}
            
        </Container>
    )
}

export default CartProgressBar