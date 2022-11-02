//need to pass user data for heading / etc - call api fetch here? - not possible to pass directly from internal models

const purchaseLog = [{/*title, totcalCost */}, {}, {}, {}]

const beef = {
title: "Steak",
description: "deliciously aged"
}

const poultry = {
  title: "Chicken Thigh",
  description: "Succulent"
}

const lamb = {
  title: "Lamb Shank",
  description: "Big chunky boy"
}

const likes = [beef, poultry, lamb]
console.log(likes)
const ProfilePage = ({user}) => {
    return (
     <div className="user-profile"> <h1> Your Profile </h1>
      <h3>Username:</h3>
      <h3>{user.username}</h3>
      {(user.isAdmin && <p>You have admin access to edit and delete available stock</p>)}
      <ul><h4>Liked Products</h4>
      { likes.map((like) => {
        // console.log(like)
       return <li>{like?.title}</li>
      })}
      </ul>
      <h4>Purchase History:</h4>
      <ul>
        {/* imported purchase log? */ purchaseLog.map((purchase) => {
          return <li>{purchase.title} for {purchase.totalCost}</li> //totalCost currently placeholder name while we work out getTotalCost cart functionality
        })}
      </ul>
      </div>
    )
  }
  
export default ProfilePage