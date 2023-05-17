import Catalogue from "./Catalogue";
import CarouselContainer from "./Carousel";

const Home = ({ items, setItems, user }) => {
  return (
    <>
      <CarouselContainer items={items} />
      <div className="fs-1 fw-bold text-center p-5 text-butcher">ALL ITEMS</div>
      <Catalogue items={items} setItems={setItems} user={user} />
    </>
  );
};

export default Home;
