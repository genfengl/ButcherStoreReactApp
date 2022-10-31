import Button from 'react-bootstrap/Button';

const LogoutButton = ({ setUser }) => {
    const handleClick = async () => {
      const res = await fetch('/logout', {
        method: 'POST'
      })
      const data = await res.json()
      console.log(data)
      setUser(null)
    }
  
    return (
      <Button variant="light" onClick={handleClick}>Logout</Button>
    )
  }
  
  export default LogoutButton