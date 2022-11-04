
import Catalogue from './Catalogue'


const Beef = ({ items, user }) => {
    const beefItems = items.filter((item) => {
        return item.category === 'Beef'
    })

    return (
        <div>
            <div className='fs-1 fw-bold text-center p-5 text-butcher'>BEEF</div>
            <Catalogue items={beefItems} user={user} />
        </div>
    )
}

export default Beef