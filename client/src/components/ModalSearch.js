
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const ModalSearch = ({ showModalSearch, handleModalSearchClose }) => {
const [searchData, setSearchData] = useState([])
const [query, setQuery] = useState('')
const [noResult, setNoResult] = useState(false)

    // useEffect(() => {
    //     const getSearchResult = async () => {
    //         // what url to use for the fetch? needs to be dynamic?
    //         const res = await fetch('/api/butcher')
    //         const data = await res.json()
    //     }

    // }, [])

    return (
        <>
            <Modal show={showModalSearch} onHide={handleModalSearchClose}>
                <Modal.Header closeButton>
                    <Modal.Title>SEARCH</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                autoFocus
                            />
                        </Form.Group>                
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalSearchClose}>
                        Close
                    </Button>                  
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalSearch