import Carousel from 'react-bootstrap/Carousel'

const CarouselContainer = () => {
    return (
        <Carousel >
            <Carousel.Item style={{ maxHeight: '30vw', minHeight: '300px' }}>
                <img
                    className='d-block w-100'
                    style={{
                        height: '30vw',
                        minHeight: '300px',
                        width: '100%',
                        objectFit: 'cover',
                        overflow: 'hidden',
                    }}
                    src='https://res.cloudinary.com/drtsno8s5/image/upload/v1667382224/butcher/jed-owen-q6Y8Xr3SoQA-unsplash_jxe5as.jpg'
                    alt='Christmas Dinner'
                />
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: '30vw', minHeight: '300px' }}>
                <img
                    className='d-block w-100'
                    style={{
                        height: '30vw',
                        minHeight: '300px',
                        width: '100%',
                        objectFit: 'cover',
                        overflow: 'hidden',
                    }}
                    src='https://res.cloudinary.com/drtsno8s5/image/upload/v1667382477/butcher/madie-hamilton-GXehL5_crJ4-unsplash_om8r8q.jpg'
                    alt='Best Beef In Town'
                />
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: '30vw', minHeight: '300px' }}>
                <img
                    className='d-block w-100'
                    style={{
                        height: '30vw',
                        minHeight: '300px',
                        width: '100%',
                        objectFit: 'cover',
                        overflow: 'hidden',
                    }}
                    src='https://res.cloudinary.com/drtsno8s5/image/upload/v1667382674/butcher/mike-bergmann-tHjXXy1kk_Q-unsplash_bhkwla.jpg'
                    alt='Freshest Seafood'
                />
            </Carousel.Item>

        </Carousel>
    )
}

export default CarouselContainer
