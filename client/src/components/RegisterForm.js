import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router';


const initialState = { 
  username: '', 
  password: '' }

const RegisterForm = () => {
  const [registerFields, setRegisterFields] = useState(initialState)
  const navigate = useNavigate()

  const handleRegisterChange = (event) => {
    const { name, value } = event.target
    setRegisterFields({
      ...registerFields,
      [name]: value
    })
  }

  const handleRegisterSubmit = async (event) => {
      event.preventDefault()
      const res = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerFields)
      })
      const data = await res.json()
      
      //Pass setUser down from App.js or create partial function?
      console.log(data)

      navigate(-1)
      setRegisterFields(initialState)
  }


    return (
      <Form onSubmit={handleRegisterSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control value={registerFields.username} name="username" type="text" placeholder="Enter Username" onChange={handleRegisterChange} />
        <Form.Text className="text-muted">
          We'll never share your password with anyone else.. or will we?
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={registerFields.password} name="password" type="password" placeholder="Password" onChange={handleRegisterChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
  }

  //need to do error flash's for duplicate username 100% and then try { add to schema} catch { err }

  export default RegisterForm