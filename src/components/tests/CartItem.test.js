import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from '../CartItem';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

const props = {
  id: 1,
  title: 'Test Product',
  price: 100,
  image: 'test.jpg',
  quantity: 2
};

describe('CartItem Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    store.clearActions(); // reset recorded actions
  });

  it('renders product details', () => {
    render(
      <Provider store={store}>
        <CartItem {...props} />
      </Provider>
    );
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Remove/i })).toBeInTheDocument();
  });

  it('dispatches addToCart on Add button click', () => {
    render(
      <Provider store={store}>
        <CartItem {...props} />
      </Provider>
    );
    fireEvent.click(screen.getByRole('button', { name: /Add/i }));
    const actions = store.getActions();
    expect(actions[0].type).toBe('ADD_TO_CART');
  });

  it('dispatches removeItem on Remove button click', () => {
    render(
      <Provider store={store}>
        <CartItem {...props} />
      </Provider>
    );
    fireEvent.click(screen.getByRole('button', { name: /Remove/i }));
    const actions = store.getActions();
    expect(actions[0].type).toBe('REMOVE_ITEM');
  });
});
