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
      <ul>
        <li>Selection of Meats</li>
        <li>About Us</li>
        <li>Contact</li>
        
      </ul>
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
