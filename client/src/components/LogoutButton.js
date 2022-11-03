import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { FiLogOut } from 'react-icons/fi'

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
      <Button variant="none" className="d-flex text-butcher p-0" onClick={handleClick}><FiLogOut /></Button>
    )
  }
  
  export default LogoutButton