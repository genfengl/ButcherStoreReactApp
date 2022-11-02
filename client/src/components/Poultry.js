
import Catalogue from './Catalogue'

const Poultry = ({ items }) => {
    const poultryItems = items.filter((item) => {
        return item.category === 'Poultry'
    })

    return (
        <div>
            <div className='fs-1 fw-bold text-center p-5 text-butcher'>POULTRY</div>
            <Catalogue items={poultryItems} />
        </div>
    )
}

export default Poultry