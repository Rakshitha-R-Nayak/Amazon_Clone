import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route,Routes } from 'react-router-dom';
import React, { useState } from 'react';
import ProductList from '../redux_comp/ProductList';
import Home from './Home';


function Navbar() {
   const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
       
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 w-100 fixed-top">
      
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img src={'../amazon_logo.jpeg'}  alt="Amazon logo"
          style={{ height: '40px', marginRight: '10px' }}
        />
        Amazon Clone
      </a>

     

        <NavLink to="/" className="text-white me-3">Home</NavLink>
      <form className="d-flex mx-auto" style={{ maxWidth: '300px' }}>
        <input onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
          className="form-control me-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>

    
      <select className="form-select me-3" style={{ width: '150px' }}>
        <option>Select Language</option>
        <option>English</option>
        <option>Hindi</option>
        <option>Kannada</option>
        <option>Telugu</option>
      </select>
      <NavLink to="/returns" className="btn btn-outline-light me-3">Returns & Orders</NavLink>

      <a href="#" className="d-flex align-items-center">
        <img
          src={'../cart.webp'}
          alt="Cart"
          style={{ width: '34px', height: '34px' }}
        />
      </a>
      <NavLink to="/cart" className="text-white me-3">Cart</NavLink>
      <NavLink to="/profile" className="text-white">Profile</NavLink>

    </nav>
    
    </div>

  );
}

export default Navbar;

