import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Edit = () => {
  const [item, setItem] = useState(null)
  const { id } = useParams()

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

      }

    return (
      <Form>
      <Form.Group className="mb-3" >
        <Form.Label>title</Form.Label>
        <Form.Control type="text" placeholder="title" value={item?.title} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="Image" value={item?.imageURL} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" value={item?.price}/>
      </Form.Group>
      <Form.Group className="mb-3"  >
        <Form.Label>Stock</Form.Label>
        <Form.Control type="text" placeholder="Stock" value={item?.stock} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Category" value={item?.category} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" value={item?.description} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    )
}

export default Edit