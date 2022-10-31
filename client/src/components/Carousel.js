import Carousel from 'react-bootstrap/Carousel'

const CarouselContainer = ({ items }) => {
    return (
        <Carousel style={{ minHeight: '30vh' }}>
            {items?.map((item) => {
                return (
                    <Carousel.Item key={item._id} style={{ maxHeight: '30vh' }}>
                        <img
                            className='d-block w-100'
                            style={{
                                height: '30vh',
                                width: '100%',
                                objectFit: 'cover',
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
