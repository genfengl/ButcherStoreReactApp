
import Catalogue from './Catalogue'

const Lamb = ({ items, user }) => {
    const lambItems = items.filter((item) => {
        return item.category === 'Lamb'
    })

    return (
        <div>
            <div className='fs-1 fw-bold text-center p-5 text-butcher'>LAMB</div>
            <Catalogue items={lambItems} user={user}/>
        </div>
    )
}

export default Lamb