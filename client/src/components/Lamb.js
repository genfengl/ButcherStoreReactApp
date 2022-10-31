
import Catalogue from './Catalogue'

const Lamb = ({ items }) => {
    const lambItems = items.filter((item) => {
        return item.category === 'Lamb'
    })

    return (
        <div>
            <h1>Lamb</h1>
            <Catalogue items={lambItems} />
        </div>
    )
}

export default Lamb