import { ADD_TO_CART, REMOVE_ITEM } from "./action";

const initialState = {
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existing = state.cart.find(item => item.id === action.payload.id);

      if (existing) {
        // increase quantity
        const updatedCart = state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cart: updatedCart };
      } else {
        // Add new item with quantity = 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      }
    }

    case REMOVE_ITEM: {
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (!existingItem) return state;//do nothing

      if (existingItem.quantity === 1) {
        // Remove item completely if quantity is 1
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id)
        };
      } else {
        // Decrease quantity
        const updatedCart = state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return { ...state, cart: updatedCart };
      }
    }

    default:
      return state;
  }
};

export default reducer;
