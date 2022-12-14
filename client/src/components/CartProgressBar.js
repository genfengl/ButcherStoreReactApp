import ProgressBar from "react-bootstrap/ProgressBar"
import Container from "react-bootstrap/Container"

const CartProgressBar = ({currentPrice}) => {
    return (
        <Container>
            <ProgressBar variant="butcher" now={currentPrice/600*100} className="mb-2"/>
            {currentPrice < 600 ? 
            (<div className="text-muted">Spend ${600-currentPrice} more for free shipping!</div>) : 
            (<div className="text-butcher">Congragulations! You gained free shipping!</div>)}
            
        </Container>
    )
}

export default CartProgressBar