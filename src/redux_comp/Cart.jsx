import { useSelector } from "react-redux";
import products from "../Product"; // import your products list
import ProductList from "./ProductList";
import { removeItem } from "./action";
import { useDispatch } from "react-redux";
import { ThemeContext } from "../components/ThemeContext";
import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const theme = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: theme === "light" ? "#be3939ff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    width: "100%",
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
  };

 
  const validCartItems = cartItems.filter((cartItem) =>
    products.find((p) => p.id === cartItem.id)
  );

  // Calculate total price
  const totalPrice = validCartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div style={{...themeStyle, padding: '20px'}}>
    

      <h2>Cart Page</h2>
<div style={{ display:'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px',
            padding: '20px', width: '100%', margin: '0 auto'}}>
      {validCartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {validCartItems.map(
            (item, index) =>
              (item.quantity || 1) > 0 && (
                <CartItem key={item.id}  id={item.id}  title={item.title} price={item.price} image={item.image} quantity={item.quantity} />
              )
          )}
          
        </ul>
      )}
      </div>
  <h2>Total Price: {totalPrice}</h2>
  <NavLink to="/checkout" className="btn btn-primary">Proceed to Checkout</NavLink>
    </div>
  );
}

export default Cart;
