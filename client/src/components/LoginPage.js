import LoginForm from "./LoginForm"

const LoginPage = ( { setUser }) => {
    return (
      <div>
      <h1>Login</h1>
      <img alt="company logo" />
      <LoginForm setUser={setUser} />
      <p>Not registered? <a href="./register">Register here</a></p>
      </div>
    )
  }
  export default LoginPage