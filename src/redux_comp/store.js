import { createStore } from "redux";
import cartReducer from "./reducer";

// Load cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage", error);
    return [];
  }
};

// Save cart to localStorage
const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage", error);
  }
};

const persistedState = {
  cart: loadCartFromLocalStorage(),
};

const store = createStore(cartReducer, persistedState);

// Subscribe to store updates
store.subscribe(() => {
  saveCartToLocalStorage(store.getState().cart);
});

export default store;
