import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop';
import Product from './Product/Product';

function App() {
  return (
    <>
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}>
          {/* <Route path=":id" element={<Product/>}/> */}
        </Route>
        <Route path="/shop/:id" element={<Product/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
