import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import CarouselContainer from './Carousel'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Catalogue = ({ items, setItems, user }) => {
const navigate = useNavigate()

    const handleDelete = async (id) => {
        const res = await fetch(`/api/butcher/${id}`, { method: 'DELETE' })
        const updatedItems = items.filter((_items) => {
          return _items._id !== id
        })
        setItems(updatedItems)
        navigate('/api/butcher')
      }

    return (
        <>
        {/* set the columns of row according to screen size */}
        <Row xs={2} md={2} lg={3} xl={4} className='g-3'>
            {items?.map((item) => {
                return (
                    <Col key={item._id} >
                        {/* set the height of card to 100px */}
                        <Card className='h-100 border-0 rounded-0' key={item._id}>
                            {/* displays item.image if an imageURL exists */}
                            {item.imageURL && (
                                <Link to={`/api/butcher/${item._id}`}>
                                <Card.Img className='h-100 rounded-0'
                                    variant='top'
                                    src={item.imageURL ? item.imageURL : ''}
                                    alt={item.title}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                                </Link>
                            )}
                            <Card.Body className='text-center'>
                                {/* display a message when image is unavailable */}
                                {item.imageURL ? (
                                    ''
                                ) : (
                                    <Card.Title>No Image Available</Card.Title>
                                )}
                                {/* display title of the item */}
                                <Card.Text className='lead'>{item.title}</Card.Text>
                                <Card.Text className='text-muted'>${item.price}</Card.Text>
                                {/* button for add to cart */}
                                { user?.isAdmin === true ? ( <>
                                <Link to={`/api/butcher/edit/${item._id}`} ><Button>Edit</Button></Link>
                                <Button variant="danger" onClick={() => handleDelete(item._id) }>Delete</Button>
                                </>
                                ) : (
                                    <Button variant='outline-dark'>
                                    Add to Cart
                                </Button>
                                )}
                                
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
        </>

    )
}

export default Catalogue