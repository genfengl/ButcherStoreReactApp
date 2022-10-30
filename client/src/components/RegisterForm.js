const handleRegisterSubmit = () => {
    
}


const RegisterForm = () => {
    return (
      <form method='put' onSubmit={handleRegisterSubmit}>
        <label>Username:</label>
        <input type='text' placeholder='Username' />
        <br />
        <label>Password:</label>
        <input type='password' placeholder='Password'/>
        <br />
        <input type='submit' value='Register' />
      </form>
    )
  }

  //need to do error flash's for duplicate username 100% and then try { add to schema} catch { err }

  export default RegisterForm