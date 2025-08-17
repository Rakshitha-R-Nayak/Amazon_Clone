import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "../Banner";
import { ThemeContext } from "../ThemeContext";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";

// mock product data
jest.mock("../../Product.js", () => [
  { id: 1, title: "Test Product 1", price: 100, image: "test1.jpg" },
  { id: 2, title: "Test Product 2", price: 200, image: "test2.jpg" },
]);

const mockStore = configureStore([]);
const store = mockStore({
  cart: { items: [] }, // match your reducer shape
});

describe("Banner Component", () => {
  it("renders carousel images", () => {
    render(
      <Provider store={store}>
        <ThemeContext.Provider value={{ theme: "light" }}>
          <Banner />
        </ThemeContext.Provider>
      </Provider>
    );

    expect(screen.getByAltText("Banner 1")).toBeInTheDocument();
    expect(screen.getByAltText("Banner 2")).toBeInTheDocument();
  });



   
});
