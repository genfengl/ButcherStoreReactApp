
import Catalogue from './Catalogue'

const Seafood = ({ items }) => {
    const seafoodItems = items.filter((item) => {
        return item.category === 'Seafood'
    })

    return (
        <div>
            <h1>Seafood</h1>
            <Catalogue items={seafoodItems} />
        </div>
    )
}

export default Seafood