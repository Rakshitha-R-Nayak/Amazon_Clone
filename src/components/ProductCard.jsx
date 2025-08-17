import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./ProductCard.css"
import { useDispatch } from 'react-redux';
import { addToCart, removeItem } from '../redux_comp/action';

function ProductCard(props){
    const dispatch = useDispatch();

    return (
        <div className="card shadow-sm card-hover bg-light">
            <div><img src={props.image} alt={props.title} style={{ width: '100%', height: '200px' }} /></div>
            <p className="card-title">{props.title}</p>
            <p>{props.price}</p>
            <button style={{color:'yellow', borderRadius:'8px'}}
                onClick={()=>dispatch(addToCart({
                    id: props.id,
                    title: props.title,
                    price: props.price,
                    image: props.image
                }))}
            >Add to Cart</button>
        </div>
    );
}

export default ProductCard;