import { useState,useEffect, useContext } from "react";
import products from "../Product"; 
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Search from "../components/Search";
import { ThemeContext } from "../components/ThemeContext";

function ProductList(props) {
    const { theme } = useContext(ThemeContext);
    const themeStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    width: "100%",
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
  };
   
      const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [loading, setLoading] = useState(true);

  const filteredProducts = products.filter((product) => {
    // Search filter
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Category filter
    const matchesCategory =
      category === "all" || product.category === category;

    // Price filter
    let matchesPrice = true;
    if (priceRange === "low") matchesPrice = product.price < 50;
    else if (priceRange === "medium")
      matchesPrice = product.price >= 50 && product.price <= 150;
    else if (priceRange === "high") matchesPrice = product.price > 150;

    return matchesSearch && matchesCategory && matchesPrice;
  });

useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      
      setLoading(false);
    }, 1000); // 1.5s delay
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div style={{ padding: "20px" }}>
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "10px",
          width: "200px",
          borderRadius: "5px",
        }}
      />

      {/* 📂 Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="grocery">Grocery</option>
      </select>

      {/* 💰 Price Filter */}
      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        style={{ padding: "8px" }}
      >
        <option value="all">All Prices</option>
        <option value="low">Below $50</option>
        <option value="medium">$50 - $150</option>
        <option value="high">Above $150</option>
      </select>

      {/* Products Display */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              quantity={product.quantity || 1}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
