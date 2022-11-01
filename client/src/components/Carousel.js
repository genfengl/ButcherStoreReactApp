import Carousel from 'react-bootstrap/Carousel'

const CarouselContainer = ({ items }) => {
    return (
        <Carousel >
            {items?.map((item) => {
                return (
                    <Carousel.Item key={item._id} style={{ maxHeight: '30vw', minHeight: '300px' }}>
                        <img
                            className='d-block w-100'
                            style={{
                                height: '30vw',
                                minHeight: '300px',
                                width: '100%',
                                objectFit: 'contain',
                                overflow: 'hidden',
                            }}
                            src={item.imageURL}
                            alt={item.title}
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default CarouselContainer
