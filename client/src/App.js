import { Routes, Route, NavLink, Link, Outlet, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home';
import Beef from './components/Beef'
import Pork from './components/Pork'
import Poultry from './components/Poultry'
import Seafood from './components/Seafood'


import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


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
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch('/api/butcher')
      const data = await res.json()
      setItems(data)
    }
    getItems()
  }, [])

  return (
    <div className="app">
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/api/butcher' element={<Home items={items} />} />
          <Route path='/api/butcher/beef' element={<Beef />} />
          <Route path='/api/butcher/pork' element={<Pork />} />
          <Route path='/api/butcher/Poultry' element={<Poultry />} />
          <Route path='/api/butcher/Seafood' element={<Seafood />} />
        </Routes>
      </main>
      {/* <NavBar /> */}
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
