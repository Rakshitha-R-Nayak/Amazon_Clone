import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import "./CheckoutPage.css";
import {ThemeContext} from "./ThemeContext";


function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart);
  const theme = useContext(ThemeContext);

  const themeStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#100f0fff",
    color: theme === "light" ? "#000" : "#fff",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    boxSizing: "border-box",
  };

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "cod",
  });

  const [errors, setErrors] = useState({});

  // Total price calculation
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

    // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form validation
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.address.trim()) formErrors.address = "Address is required";
    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone must be 10 digits";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        
      alert("Order placed successfully!");

      // Clear the form
      setFormData({
        name: "",
        address: "",
        phone: "",
        paymentMethod: "cod",
      });
    }
  };

  return (
  <div className="checkout-container">
      <h2>Checkout</h2>

     
      <h3>Order Summary</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} × {item.quantity || 1} — ₹
              {item.price * (item.quantity || 1)}
            </li>
          ))}
        </ul>
      )}
      <h3>Total Price: ₹{totalPrice}</h3>

    
  <div className="shipping-box" style={{...themeStyle}}>
  <h3>Shipping Information</h3>
  <form className="shipping-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name"
            value={formData.name} onChange={handleChange}/>
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>Address:</label>
          <textarea  name="address" value={formData.address}
            onChange={handleChange}/>
          {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
        </div>

        <div>
          <label>Phone:</label>
          <input type="text" name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>

        <div>
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Place Order
        </button>
      </form>
      </div>
    </div>
  );
}

export default CheckoutPage;
