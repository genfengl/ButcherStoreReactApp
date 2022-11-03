import LoginForm from "./LoginForm"

const LoginPage = ({ setUser }) => {
  return (
    <div>
      <div className='fs-1 fw-bold text-center p-5 text-butcher'>LOGIN</div>
      {/* <img alt="company logo" /> */}
      <LoginForm setUser={setUser} />
      <div className="mt-2">Not registered? <a href="./register" className="text-butcher">Register here</a></div>
    </div>
  )
}
export default LoginPage