import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./ProductCard.css";
import { useDispatch } from 'react-redux';
import { addToCart, removeItem } from '../redux_comp/action';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

function CartItem(props) {

    const theme = useContext(ThemeContext);

    const themeStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#100f0fff",
    color: theme === "light" ? "#000" : "#fff",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    boxSizing: "border-box",
  };
  const dispatch = useDispatch();

  return (
    <div className="card shadow-sm card-hover " style={{...themeStyle, width: '700px', margin: '10px', position: 'relative', top: '20px',display:'grid',
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        
        gap: "10px", alignItems:"end"
     }}>
      <img
        src={props.image}
        alt={props.title}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'contain' }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">${props.price}</p>
        <p className="card-text">Quantity: {props.quantity}</p>

        <button
          className="btn btn-warning me-2"
          onClick={() => dispatch(addToCart({
            id: props.id,
            title: props.title,
            price: props.price,
            image: props.image,
            quantity: props.quantity + 1
          }))}
        >
          Add 
        </button>

        <button
          className="btn btn-danger"
          onClick={() => dispatch(removeItem(props.id ))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
