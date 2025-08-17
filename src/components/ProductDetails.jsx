import  React,{useContext} from "react";
import { useParams } from "react-router-dom";
import  products  from '../Product.js'; 
import { ThemeContext } from "./ThemeContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetails() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title); 
  const product = products.find((p) => p.title === decodedTitle);
  const {theme }=useContext(ThemeContext)

  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
   
  }

  return (
    <div style={{border: '2px solid #007bff', backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '30px', textAlign: 'center', borderRadius: '16px', margin: '40px auto',
     maxWidth: '500px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', position: 'sticky', top: '20px'}}>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: theme === 'light' ? '#f8f9fa' : '#222', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ maxHeight: "300px", maxWidth: "300px", marginBottom: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        />
        <h2 style={{ color: theme === 'light' ? '#007bff' : '#66b2ff', marginBottom: '10px' }}>{product.title}</h2>
        <h4 style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '0' }}>{product.price}</h4>
      </div>
    </div>
  );
}

export default ProductDetails;
