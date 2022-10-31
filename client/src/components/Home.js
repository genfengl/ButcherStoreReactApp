import Catalogue from "./Catalogue"
import CarouselContainer from "./Carousel"

const Home = ({ items, user }) => {
    return (
        <>
        <CarouselContainer items={items} />
        <Catalogue items={items} user={user} />
        </>
    )
}

export default Home