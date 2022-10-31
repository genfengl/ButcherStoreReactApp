
import Catalogue from './Catalogue'

const Pork = ({ items }) => {
    const porkItems = items.filter((item) => {
        return item.category === 'Pork'
    })

    return (
        <div>
            <h1>Pork</h1>
            <Catalogue items={porkItems} />
        </div>
    )
}

export default Pork