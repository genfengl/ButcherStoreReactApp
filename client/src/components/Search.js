
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Catalogue from './Catalogue'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        const getSearchResults = async () => {
            // search?query=() should set the req.query for the backend
            const res = await fetch(`/api/butcher/search?query=${searchTerm}`)
            const data = await res.json()
            setSearchResults(data)
        }
        getSearchResults()
    }, [searchTerm])

    return (
        <>
            <div className='fs-1 fw-bold text-center p-5 text-butcher'>SEARCH</div>
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="search" onChange={handleChange} />
                </Form.Group>
                <div className="text-muted py-3">
                    {searchTerm ? (`Showing search results for: ${searchTerm}`) : 'Showing all items'} 
                </div>
            </Form>
            {/* default searchResult is an empty array, which is always true */}
            {(searchResults.length > 0) ? <Catalogue items={searchResults} /> : 
            <div>
                <h1>No items found</h1>
            </div>}
        </>
    )
}

export default Search