import Banner from "./Banner";
import ProductList from "../redux_comp/ProductList";
function Home() {
  return (
    <div>
      <h1>Welcome to the Amazon Clone</h1>
      <Banner/>
      <div style={{ position: "relative", top: "200px" }}>
      <ProductList />
      </div>
    </div>
  );
}

export default Home;
