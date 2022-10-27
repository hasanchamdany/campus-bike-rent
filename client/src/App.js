// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/index.js'
import Rent from './pages/rent.js'
import Profile from './pages/profile.js'
import Dashboard from './pages/dashboard.js'
import Login from './pages/login.js'
import Signup from './pages/signup.js'
// import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/auth/login" caseSensitive={false} element={<Login/>}/>
        <Route path="/auth/signup" caseSensitive={false} element={<Signup/>}/>
        <Route path="/" caseSensitive={false} element={<Home/>}/>
        <Route path="/rent" caseSensitive={false} element={<Rent/>}/>
        <Route path="/admin" caseSensitive={false} element={<Dashboard/>}/>
        <Route path="/profile" caseSensitive={false} element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;