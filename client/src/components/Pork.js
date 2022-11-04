
import Catalogue from './Catalogue'

const Pork = ({ items, user }) => {
    const porkItems = items.filter((item) => {
        return item.category === 'Pork'
    })

    return (
        <div>
            <div className='fs-1 fw-bold text-center p-5 text-butcher'>PORK</div>
            <Catalogue items={porkItems} user={user}/>
        </div>
    )
}

export default Pork