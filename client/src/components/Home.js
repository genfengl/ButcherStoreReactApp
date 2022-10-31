import Catalogue from "./Catalogue"
import CarouselContainer from "./Carousel"

const Home = ({ items, setItems, user }) => {
    return (
        <>
        <CarouselContainer items={items} />
        <Catalogue items={items} setItems={setItems} user={user}/>
        </>
    )
}

export default Home