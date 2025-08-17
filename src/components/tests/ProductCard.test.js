import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);
const store = mockStore({});

describe("ProductCard Component", () => {
  it("renders product title and price", () => {
    render(
      <Provider store={store}>
        <ProductCard
          id={1}
          title="Test Product"
          price={99.99}
          image="/test.jpg"
          quantity={1}
        />
      </Provider>
    );
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("99.99")).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add to Cart/i })).toBeInTheDocument();
  });

  it('dispatches addToCart on button click', () => {
    render(
      <Provider store={store}>
        <ProductCard
          id={1}
          title="Test Product"
          price={99.99}
          image="/test.jpg"
          quantity={1}
        />
      </Provider>
    );
    fireEvent.click(screen.getByRole('button', { name: /Add to Cart/i }));
    const actions = store.getActions();
    expect(actions[0].type).toBe('ADD_TO_CART');
    expect(actions[0].payload.title).toBe('Test Product');
  });
});

