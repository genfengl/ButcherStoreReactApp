
import Catalogue from './Catalogue'


const Beef = ({ items, handleItemClick }) => {
    const beefItems = items.filter((item) => {
        return item.category === 'Beef'
    })

    return (
        <div>
            <h1>Beef</h1>
            <Catalogue items={beefItems} handleItemClick={handleItemClick} />
        </div>
    )
}

export default Beef