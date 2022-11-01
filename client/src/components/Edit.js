import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Edit = ({ items, setItems }) => {
  const [item, setItem] = useState(null)
  const navigate = useNavigate()
  const { id } = useParams()


  const handleChange = (event) => {
    // console.log(event.target)
    const { name, value } = event.target
    setItem({
      ...item,
      [name]: value
    })
  }


  useEffect(() => {
    const getItem = async () => {
      const res = await fetch(`/api/butcher/${id}`)
      const data = await res.json()
      setItem(data)
    }
    getItem()
  }, [id])

  
  const handleEditSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const res = await fetch(`/api/butcher/edit/${item?._id}`, {
      method: "PUT",
      body: formData
    })
    console.log(formData)
    const data = await res.json()
    const updatedItems = items?.map((_item) => {
      if (_item._id !== data._id) {
        return _item
      }
      return data
    })
    setItems(updatedItems)
    navigate('/api/butcher')

  }

  return (
    <Container className="p-3">
      <h3></h3>
      <Form onSubmit={handleEditSubmit} >
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
          <Form.Control name="price" type="text" value={item?.price} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3"  >
          <Form.Label>Stock</Form.Label>
          <Form.Control name="stock" type="text" value={item?.stock} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Category</Form.Label>
          <Form.Control name="category" type="text" value={item?.category} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" type="text" value={item?.description} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>

  )
}

export default Edit