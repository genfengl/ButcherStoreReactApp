

const LoginForm = () => {
    return (
      <form method='put' onSubmit={handleLoginSubmit}>
        <label>Username:</label>
        <input type='text' placeholder='Username' />
        <br />
        <label>Password:</label>
        <input type='password' placeholder='Password'/>
        <br />
        <input type='submit' value='Login' />
      </form>
    )
  }

  export default LoginForm