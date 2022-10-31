
import Catalogue from './Catalogue'


const Beef = ({ items }) => {
    const beefItems = items.filter((item) => {
        return item.category === 'Beef'
    })

    return (
        <div>
            <h1>Beef</h1>
            <Catalogue items={beefItems} />
        </div>
    )
}

export default Beef