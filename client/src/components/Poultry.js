
import Catalogue from './Catalogue'

const Poultry = ({ items }) => {
    const poultryItems = items.filter((item) => {
        return item.category === 'Poultry'
    })

    return (
        <div>
            <h1>Poultry</h1>
            <Catalogue items={poultryItems} />
        </div>
    )
}

export default Poultry