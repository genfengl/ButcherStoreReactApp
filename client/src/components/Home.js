import Catalogue from "./Catalogue"
import CarouselContainer from "./Carousel"

const Home = ({ items }) => {
    return (
        <>
        <CarouselContainer items={items} />
        <Catalogue items={items} />
        </>
    )
}

export default Home