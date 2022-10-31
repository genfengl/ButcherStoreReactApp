
import Catalogue from './Catalogue'

const Pork = ({ items }) => {
    const porkItems = items.filter((item) => {
        return item.category === 'Pork'
    })

    return (
        <div>
            <div className='fs-1 fw-bold text-center p-5'>PORK</div>
            <Catalogue items={porkItems} />
        </div>
    )
}

export default Pork