import { NavLink } from "react-router-dom";
import Login from "./Login";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      
      <NavLink to="/">Go to Home</NavLink>
      <br/>

  <NavLink to="/login" style={{ marginLeft: "10px", fontSize: "24px" }}>Login</NavLink>
    </div>
  );
}
export default Profile;