import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const initialState = { 
  username: '', 
  password: '' }

const LoginForm = ( { setUser }) => {
  const [loginFields, setLoginFields] = useState(initialState)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

const handleLoginChange = (event) => {
    const { name, value } = event.target
    setLoginFields({
      ...loginFields,
      [name]: value
    })
}

const handleLoginSubmit = async (event) => {
    event.preventDefault()
    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginFields) 
      
    })
    console.log(loginFields)
    const data = await res.json()
    if (res.status === 401) {
      setError(data)
    } else if (res.status === 200) {
      setError(null)
      setUser(data)
      console.log(data)
      navigate("/api/butcher")
    }

    setLoginFields(initialState)
}

    return (
      <Form onSubmit={handleLoginSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='lead'>Username</Form.Label>
        <Form.Control value={loginFields.username} name="username" type="text" placeholder="Username" onChange={handleLoginChange} />
        <Form.Text className="text-muted">
          We'll never share your password with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='lead'>Password</Form.Label>
        <Form.Control value={loginFields.password} name="password" type="password" placeholder="Password" onChange={handleLoginChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      { error && <p>Incorrect Username or Password</p>}
      </Form.Group>
      <Button variant="butcher" type="submit">
        Submit
      </Button>
    </Form>
    )
  }

  export default LoginForm