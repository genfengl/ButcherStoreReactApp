
import Catalogue from './Catalogue'

const Seafood = ({ items, user }) => {
    const seafoodItems = items.filter((item) => {
        return item.category === 'Seafood'
    })

    return (
        <div>
            <div className='fs-1 fw-bold text-center p-5 text-butcher'>SEAFOOD</div>
            <Catalogue items={seafoodItems} user={user}/>
        </div>
    )
}

export default Seafood