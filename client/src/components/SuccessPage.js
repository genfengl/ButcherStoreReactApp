import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"

const SuccessPage = ({ user }) => {
    return (
        <div className="d-flex flex-column gap-3">
            <div className='fs-1 fw-bold text-center p-5 text-success'>PAYMENT SUCCESSFUL!</div>
            <div className='fs-3 lead text-center'>
                Nice to meat you {user?.username}.
            </div>
            <div className="fs-3 lead text-center">We have successfully collected your credit card information. </div>
            <div className="fs-3 lead text-center">Enjoy the meat!</div>
            <Button as={Link} to="/butcher/" variant="outline-butcher" className="mt-5">Back to Home Page</Button>
        </div>
    )
}

export default SuccessPage