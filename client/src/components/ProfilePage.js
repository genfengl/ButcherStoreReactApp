//need to pass user data for heading / etc - call api fetch here? - not possible to pass directly from internal models
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
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
    if (item.likes.includes(user.id)) {
      likedItems.push(item)
    }
  })
  console.log(likedItems)

  return (
    <div className="user-profile">
      <div className='fs-1 fw-bold text-center p-5 text-butcher'>Profile</div>
      <Link className="d-none d-md-block" to='/api/butcher'>
        {user && <LogoutButton setUser={setUser} />}
        <div>hello</div>
      </Link>
      <h3>Username:</h3>

      <h3>{user?.username}</h3>
      {/* {(user.isAdmin && <p>You have admin access to edit and delete available stock</p>)} */}
      <h4>Liked Products</h4>
      <Catalogue items={likedItems} />












      <h4>Purchase History:</h4>
      <ul>
        {/* {imported purchase log? / purchaseLog.map((purchase) => {
          return <li>{purchase.title} for {purchase.totalCost}</li> //totalCost currently placeholder name while we work out getTotalCost cart functionality
        })} */}
      </ul>
    </div>
  )
}

export default ProfilePage