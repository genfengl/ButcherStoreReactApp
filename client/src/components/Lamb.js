
import Catalogue from './Catalogue'

const Lamb = ({ items }) => {
    const lambItems = items.filter((item) => {
        return item.category === 'Lamb'
    })

    return (
        <div>
            <div className='fs-1 fw-bold text-center p-5'>LAMB</div>
            <Catalogue items={lambItems} />
        </div>
    )
}

export default Lamb