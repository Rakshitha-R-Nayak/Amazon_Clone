import { useState,useContext } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Navbar1 from './components/NA'
import Banner from './components/Banner'
import products from './Product'
import ProductCard from './components/ProductCard'
import ProductDetails from './components/ProductDetails'
import ThemeToggleComp from './components/ToggleTheme'
import ThemeProvider from './components/ThemeContext'
import { ThemeContext } from './components/ThemeContext'
import Cart from './redux_comp/Cart'
import CheckoutPage from './components/CheckoutPage'
import ProductList from './redux_comp/ProductList'
import Login from './components/Login'
import Profile from './components/Profile'
import Returns from './components/Returns'

function App() {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    height: "100vh",
    padding: "0px",
    width: "100vw",
  };
  return (
    <BrowserRouter>
      <div style={appStyle}>
         <ThemeToggleComp />
        
        <Navbar />
        
        

        <div style={{ position: "relative", top: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} style={{ marginTop: "20px" }} />
            <Route path="/product/:title" element={<ProductDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<h2 className="text-center mt-5">404 Not Found</h2>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/returns" element={<Returns />} />
          </Routes>
        </div>
        
        
        
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;

