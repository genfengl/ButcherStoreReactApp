import { Routes, Route, NavLink, Link, Outlet, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home';
import Beef from './components/Beef'
import Pork from './components/Pork'
import Poultry from './components/Poultry'
import Seafood from './components/Seafood'
import OffcanvasNav from './components/OffcanvasNav';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import RegisterPage from './components/RegisterPage';
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


// const handleLoginClick = (event) => {
// }
function App() {
  // const [items, setItems] = useState([])
  // const [user, setUser] = useState([])

  const [items, setItems] = useState([])
  const [showOffcanvasNav, setShowOffcanvasNav] = useState(false)

  const handleOffcanvasClose = () => setShowOffcanvasNav(false)
  const handleOffcanvasShow = () => {
    setShowOffcanvasNav(true)
    console.log(showOffcanvasNav)
  }

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch('/api/butcher')
      const data = await res.json()
      setItems(data)
    }
    getItems()
  }, [])



  return (
    <Container>

<OffcanvasNav showOffcanvasNav={showOffcanvasNav} handleOffcanvasClose={handleOffcanvasClose} />

<Header handleOffcanvasShow={handleOffcanvasShow} />


      <main>
        <Routes>
          <Route path='/api/butcher' element={<Home items={items} />} />
          <Route path='/api/butcher/beef' element={<Beef />} />
          <Route path='/api/butcher/pork' element={<Pork />} />
          <Route path='/api/butcher/poultry' element={<Poultry />} />
          <Route path='/api/butcher/seafood' element={<Seafood />} />
          {/* unsure below route does anything if no user loggedin? */}
          if (user) { <Route path='/api/butcher/profile' element={<ProfilePage />} /> }
          <Route path='/api/butcher/login' element={<LoginPage setUser={setUser} />} />
          if (user) {<Route path='/api/butcher/profile' element={<ProfilePage />} />}
          <Route path='/api/butcher/login' element={<LoginPage />} />
          <Route path='/api/butcher/register' element={<RegisterPage />} />
        </Routes>
      </main>
    </Container>
  );
}

export default App;
