//need to pass user data for heading / etc - call api fetch here? - not possible to pass directly from internal models
const likes = []

const ProfilePage = ({user}) => {
    return (
     <div className="user-profile"> <h1> Your Profile </h1>
      <h3>Username: {user.username}</h3>
      {(user.isAdmin && <p>You have admin access to edit and delete available stock</p>)}
      <ul><h4>Liked Products</h4>
      { likes.map((like) => {
       return <li>{like.title}{like}</li>
      })}
      </ul>
      <h4>Purchase History</h4>
      </div>
    )
  }
  
export default ProfilePage