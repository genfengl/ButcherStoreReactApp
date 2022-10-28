import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import CarouselContainer from './Carousel'

const Home = ({ items }) => {
    return (
        <>
        <CarouselContainer items={items} />
        <Container>
        {/* set the columns of row according to screen size */}
        <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
            {items.map((item) => {
                return (
                    <Col key={item.id}>
                        {/* set the height of card to 100px */}
                        <Card className='h-100' key={item.id}>
                            {/* displays item.image if an imageURL exists */}
                            {item.imageURL && (
                                <Card.Img className='h-100'
                                    variant='top'
                                    src={item.imageURL ? item.imageURL : ''}
                                    alt={item.title}
                                />
                            )}
                            <Card.Body>
                                {/* display a message when image is unavailable */}
                                {item.imageURL ? (
                                    ''
                                ) : (
                                    <Card.Title>No Image Available</Card.Title>
                                )}
                                {/* display title of the item */}
                                <Card.Text className='text-muted'>{item.title}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                {/* button for add to cart */}
                                <Button variant='outline-dark'>
                                    Add to Cart
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                )
            })}
        </Row>
        </Container>
        </>

    )
}

export default Home