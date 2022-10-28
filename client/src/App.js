import { application } from 'express';
import { Routes, Route, NavLink, Link, Outlet, useParams } from 'react-router-dom'
import './App.css';

const Header = () => {
  return (
    <div className="header">
    <h4 className="header-title">Header</h4>
    </div>
  )
}

const NavBar = () => {
  return (
    <div className="navBar">
      {/* <ul>
        <li>Selection of Meats</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul> */}
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  )
}
const LoginForm = (props) => {
  const handleSubmit = (event) => {
  //  res.redirect('/login') ???
  }
  return (
    <form>
      <label>Username:</label>
      <input type='text'>Username</input>
      <br />
      <label>Password:</label>
      <input type='password'>Password</input>
      <br />
      <input type='submit' onSubmit={handleSubmit}>Login</input>
    </form>
  )
}

const LoginPage = (props, LoginForm) => {
  return (
    <div>
    <h1>Login</h1>
    <img src={props.imageURL} alt="company logo" />
    <LoginForm />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
    </div>
  );
}

export default App;
