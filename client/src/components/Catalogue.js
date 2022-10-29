import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Home = ({ items }) => {
    return (
        <>

            {/* set the columns of row according to screen size */}
            <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                {items.map((item) => {
                    return (
                        <Col key={item.id}>
                            {/* set the height of card to 100px */}
                            <Card key={item.id} className="rounded-0 border-0">
                                {/* displays item.image if an imageURL exists */}
                                {item.imageURL && (
                                    <Card.Img className='mh-100 rounded-0'
                                        variant='top'
                                        style={{
                                            height: '300px',
                                            objectFit: 'cover'
                                        }}
                                        src={item.imageURL ? item.imageURL : ''}
                                        alt={item.title}
                                    />
                                )}
                                <Card.Body className="text-center">
                                    {/* display a message when image is unavailable */}
                                    {item.imageURL ? (
                                        ''
                                    ) : (
                                        <Card.Title>No Image Available</Card.Title>
                                    )}
                                    {/* display title of the item */}
                                    <Card.Text className='text-muted'>{item.title}</Card.Text>
                                    {/* button for add to cart */}
                                    <Button variant='outline-dark'>
                                        Add to Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </>

    )
}

export default Home