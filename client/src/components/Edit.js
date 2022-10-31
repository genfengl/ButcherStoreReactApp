import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Edit = () => {
  const [item, setItem] = useState(null)
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const setCurrentValue = () => {
    setTitle(item.title)
  }

  const handleChange = (event) => {
    console.log(event.target)
    const { name, value } = event.target
    setItem({
      ...item,
      [name]: value
    })
  }

  console.log(item)

  useEffect(() => {
    const getItem = async () => {
      const res = await fetch(`/api/butcher/${id}`)
      const data = await res.json()
      setItem(data)
    }
    getItem()
  }, [id])

  const handleEditSubmit = (event) => {
    event.preventDefault()

  }

  return (
    <Container className="p-3">
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" type="text" placeholder="Title" value={item?.title} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control name='image' type="file" placeholder="Image"/>
      </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Price" value={item?.price} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3"  >
          <Form.Label>Stock</Form.Label>
          <Form.Control type="text" placeholder="Stock" value={item?.stock} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Category" value={item?.category} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" value={item?.description} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>

  )
}

export default Edit