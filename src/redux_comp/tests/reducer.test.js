import reducer from '../reducer';
import { ADD_TO_CART, REMOVE_ITEM } from '../action';

// Helper action creators for testing
const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

const removeItem = (product) => ({
  type: REMOVE_ITEM,
  payload: product
});

describe('Cart Reducer', () => {
  it('should add item to cart', () => {
    const initialState = { cart: [] };
    const action = addToCart({ id: 1, title: "Product", price: 10 });
    const newState = reducer(initialState, action);
    expect(newState.cart.length).toBe(1);
    expect(newState.cart[0].quantity).toBe(1);
  });

  it('should increase quantity if item already exists', () => {
    const initialState = { cart: [{ id: 1, title: "Product", price: 10, quantity: 1 }] };
    const action = addToCart({ id: 1, title: "Product", price: 10 });
    const newState = reducer(initialState, action);
    expect(newState.cart.length).toBe(1);
    expect(newState.cart[0].quantity).toBe(2);
  });

  it('should remove item from cart if quantity is 1', () => {
    const initialState = { cart: [{ id: 1, title: "Product", price: 10, quantity: 1 }] };
    const action = removeItem({ id: 1 });
    const newState = reducer(initialState, action);
    expect(newState.cart.length).toBe(0);
  });

  it('should decrease quantity if item quantity > 1', () => {
    const initialState = { cart: [{ id: 1, title: "Product", price: 10, quantity: 2 }] };
    const action = removeItem({ id: 1 });
    const newState = reducer(initialState, action);
    expect(newState.cart.length).toBe(1);
    expect(newState.cart[0].quantity).toBe(1);
  });

  it('should do nothing if removing non-existent item', () => {
    const initialState = { cart: [{ id: 1, title: "Product", price: 10, quantity: 1 }] };
    const action = removeItem({ id: 2 });
    const newState = reducer(initialState, action);
    expect(newState.cart.length).toBe(1);
    expect(newState.cart[0].quantity).toBe(1);
  });
});