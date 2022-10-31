
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Catalogue from './Catalogue'

const Search = () => {
    return (
        <>
            <h1>Search</h1>
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="search" />
                    <Form.Text className="text-muted">
                        Popular items: ......
                    </Form.Text>
                </Form.Group>
            </Form>
            <Catalogue />
        </>
    )
}

export default Search