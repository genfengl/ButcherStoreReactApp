import RegisterForm from "./RegisterForm"

const RegisterPage = () => {
    return (
      <div>
      <div className='fs-1 fw-bold text-center p-5 text-butcher'>REGISTER</div>
      {/* <img alt="company logo" /> */}
      <RegisterForm />
      {/* <div className="mt-2">Not registered? <a href="./register" className="text-butcher">Register here</a></div> */}
    </div>
    )
  }
  export default RegisterPage