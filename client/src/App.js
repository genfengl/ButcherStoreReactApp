import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home';
import Beef from './components/Beef'
import Pork from './components/Pork'
import Poultry from './components/Poultry'
import Lamb from './components/Lamb';
import Seafood from './components/Seafood'
import OffcanvasNav from './components/OffcanvasNav';
import OffcanvasCart from './components/OffcanvasCart'
import Search from './components/Search'
import Show from './components/Show'
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import RegisterPage from './components/RegisterPage';
import Container from 'react-bootstrap/Container'
import Edit from './components/Edit';
import CreateMeat from './components/CreateMeat';
import CartProvider from './CartContext';
import './css/main.css';
import { useEffect, useState } from 'react';
import './App.css' 
import SuccessPage from './components/SuccessPage';



// const handleLoginClick = (event) => {
// }
function App() {
  const [items, setItems] = useState([])
  const [user, setUser] = useState(null)
  // const [showItem, setShowItem] = useState(null)
  const [showOffcanvasNav, setShowOffcanvasNav] = useState(false)
  const [showOffcanvasCart, setShowOffcanvasCart] = useState(false)

  const handleOffcanvasNavClose = () => setShowOffcanvasNav(false)
  const handleOffcanvasNavShow = () => setShowOffcanvasNav(true)
  const handleOffcanvasCartClose = () => setShowOffcanvasCart(false)
  const handleOffcanvasCartShow = () => setShowOffcanvasCart(true)

  console.log(user)

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch('/api/butcher')
      const data = await res.json()
      setItems(data)
    }
    getItems()
  }, [])

  useEffect(() => {
    const getLoggedInUser = async () => {
      const res = await fetch('/current-session')
      const data = await res.json()
      setUser(data)
    }
    getLoggedInUser()
  }, [])

  return (
    <div>
      <CartProvider>
      <OffcanvasNav
        user={user} setUser={setUser}
        showOffcanvasNav={showOffcanvasNav}
        handleOffcanvasNavClose={handleOffcanvasNavClose}
      />
      <OffcanvasCart 
        items={items}
        showOffcanvasCart={showOffcanvasCart}
        handleOffcanvasCartClose={handleOffcanvasCartClose}
      />

      <Header
        handleOffcanvasNavShow={handleOffcanvasNavShow}
        handleOffcanvasCartShow={handleOffcanvasCartShow}
        user={user} setUser={setUser}
      />

      <Container>
        <Routes>
          <Route path='/butcher' element={<Home items={items} setItems={setItems} user={user} />} />
          <Route path='/butcher/beef' element={<Beef items={items} user={user} />} />
          <Route path='/butcher/pork' element={<Pork items={items} user={user} />} />
          <Route path='/butcher/poultry' element={<Poultry items={items} user={user} />} />
          <Route path='/butcher/lamb' element={<Lamb items={items} user={user} />} />
          <Route path='/butcher/seafood' element={<Seafood items={items} user={user} />} />
          <Route path='/butcher/:id' element={<Show user={user} />} />
          <Route path='/butcher/search' element={<Search />} />
          <Route path='/butcher/edit/:id' element={<Edit items={items} setItems={setItems} />} />
          {/* unsure below route does anything if no user loggedin? */}
          <Route path='/butcher/add' element={items.length && <CreateMeat items={items} setItems={setItems}/>} />
          if (user) {<Route path='/butcher/profile' element={<ProfilePage user={user} setUser={setUser} setItems={setItems} />} />}
          else {<Route path='/butcher/login' element={<LoginPage setUser={setUser} />} />}
          <Route path='/butcher/register' element={<RegisterPage />} />
          <Route path='/butcher/success' element={<SuccessPage user={user} />} />
        </Routes>
      </Container>
      </CartProvider>
      </div>
      
  );
}

export default App;
