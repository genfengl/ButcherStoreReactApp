import CarouselContainer from "./Carousel"
import Catalogue from "./Catalogue"

const Home = ({ items }) => {
    return (
        <div className="container">
            <CarouselContainer items={items} />
            <Catalogue items={items} />
        </div>
    )
}

export default Home