// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/index.js'
import Rent from './pages/rent.js'

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/auth" caseSensitive={false} element=""/>
        <Route path="/" caseSensitive={false} element={<Home/>}/>
        <Route path="/rent" caseSensitive={false} element={<Rent/>}/>
        <Route path="/admin" caseSensitive={false} element=""/>
      </Routes>
    </Router>
  );
}

export default App;
