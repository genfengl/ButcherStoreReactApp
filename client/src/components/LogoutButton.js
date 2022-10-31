import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

const LogoutButton = ({ setUser }) => {
  const navigate = useNavigate()
    const handleClick = async () => {
      const res = await fetch('/logout', {
        method: 'POST'
      })
      const data = await res.json()
      console.log(data)
      setUser(null)
      navigate('/api/butcher')
    }
  
    return (
      <Button variant="light" onClick={handleClick}>Logout</Button>
    )
  }
  
  export default LogoutButton