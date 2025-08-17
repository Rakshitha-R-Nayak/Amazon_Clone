import React,{useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import products from '../Product.js';
import ProductCard from './ProductCard';
import { ThemeContext } from "./ThemeContext.jsx";

import { useDispatch } from "react-redux";

function Banner() {
  const {theme} = useContext(ThemeContext);
  
  
  const themeStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    width: "100%",
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
  };
  return (
   <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel" style={{width: '100vw', padding: '0', paddingLeft: '0', height: '400px', position: 'relative', }}>
  
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
    <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="1"></button>
    
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/bannerimg4.jpg" className="d-block w-100" alt="Banner 1" />
    </div>
    <div className="carousel-item">
      <img src="/bannerimg6.jpg" className="d-block w-100" alt="Banner 2" />
    </div>
    
  </div>


  <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
 

  </div>


  );
}

export default Banner;
