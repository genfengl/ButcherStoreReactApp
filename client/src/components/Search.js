
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Catalogue from './Catalogue'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault()
        setQuery(searchTerm)
    }

    useEffect(() => {
        const getSearchResults = async () => {
            const res = await fetch(`/api/butcher/search/${searchTerm}`)
            const data = await res.json()
            setSearchResults(data)
        }
        getSearchResults()
    },[query])

    return (
        <>
            <h1>Search</h1>
            <Form>
                <Form.Group className='d-flex gap-1'>
                    <Form.Control type="text" placeholder="search" onChange={handleChange} />
                    <Button onClick={handleSearchSubmit}>Search</Button>
                </Form.Group>
                <Form.Text className="text-muted">
                    Popular items: ......
                </Form.Text>
            </Form>
            <Catalogue items={searchResults} />
        </>
    )
}

export default Search