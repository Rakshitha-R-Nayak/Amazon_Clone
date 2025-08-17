import { NavLink } from "react-router-dom";

function Returns() {
  return (
    <div>
      <h1>Returns & Orders</h1>
      <p>This is the Returns & Orders page.</p>
      <NavLink to="/">Go to Home</NavLink>
      <br/>
      <NavLink to="/profile" style={{ marginLeft: "10px", fontSize: "24px" }}>Profile</NavLink>
    </div>
  );
}

export default Returns;