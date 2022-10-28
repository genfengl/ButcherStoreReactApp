import { Routes, Route, NavLink, Link, Outlet, useParams } from 'react-router-dom'
import './App.css';

const Header = () => {
  return (
    <div className="header">
    <h4 className="header-title">Header</h4>
    </div>
  )
}

// const handleLoginClick = (event) => {
// }

const NavBar = () => {
  return (
    <div className="navBar">
      <ul>
        <li>Selection of Meats</li>
        <li>About Us</li>
        <li>Contact</li>
        <button onClick={LoginPage}>Login</button>
      </ul>
    </div>
  )
}
const LoginForm = () => {
  return (
    <form method='put'>
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

const LoginPage = () => {
  return (
    <div>
    <h1>Login</h1>
    <img alt="company logo" />
    <LoginForm />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <LoginPage />
    </div>
  );
}

export default App;
