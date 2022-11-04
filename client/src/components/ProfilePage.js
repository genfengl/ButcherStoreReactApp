//need to pass user data for heading / etc - call api fetch here? - not possible to pass directly from internal models
import { useEffect, useState } from "react"
import Catalogue from "./Catalogue"
import LogoutButton from "./LogoutButton"

const purchaseLog = [{/*title, totcalCost */ }, {}, {}, {}]

// const beef = {
// title: "Steak",
// description: "deliciously aged"
// }

// const poultry = {
//   title: "Chicken Thigh",
//   description: "Succulent"
// }

// const lamb = {
//   title: "Lamb Shank",
//   description: "Big chunky boy"
// }

// const likes = [beef, poultry, lamb]

const ProfilePage = ({ user, setUser }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch('/api/butcher')
      const data = await res.json()
      setItems(data)
    }
    getItems()
  }, [])

  let likedItems = []
  items.forEach((item) => {
    if (item.likes.includes(user?._id)) {
      likedItems.push(item)
    }
  })

  return (
    <div className="d-flex flex-column gap-3">
      <div className='fs-1 fw-bold text-center p-5 text-butcher'>PROFILE</div>
      <div className="lead d-flex align-items-center gap-2">
        Username: {user?.username}
        {user && <LogoutButton setUser={setUser} />}
      </div>
      <div>
        <div className='fs-3 fw-bold text-start text-butcher'>Liked Products</div>
      </div>


      {/* {(user.isAdmin && <p>You have admin access to edit and delete available stock</p>)} */}
      <Catalogue items={likedItems} />
      <div className='fs-3 fw-bold text-start text-butcher'>Purchase History</div>
      <ul>
        {/* {imported purchase log? / purchaseLog.map((purchase) => {
          return <li>{purchase.title} for {purchase.totalCost}</li> //totalCost currently placeholder name while we work out getTotalCost cart functionality
        })} */}
      </ul>
    </div>
  )
}

export default ProfilePage