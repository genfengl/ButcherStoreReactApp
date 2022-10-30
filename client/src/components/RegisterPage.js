import RegisterForm from "./RegisterForm"

const RegisterPage = () => {
    return (
      <div>
      <h1>Register</h1>
      <img alt="company logo" />
      <RegisterForm />
      <p>Already a User?<a href="./login">Login here</a></p>
      </div>
    )
  }
  export default RegisterPage