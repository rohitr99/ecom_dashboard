import React from "react";
import {Link} from  'react-router-dom';

function Nav() {
  return (
    <div className="nav-ul">
        <ul>
    
            <li><Link to="/">Products</Link></li><br></br>
            <li><Link to="/add">Addproduct</Link></li><br></br>
            <li><Link to="/update">Updateproduct</Link></li><br></br>
            <li><Link to="/logout">Logout</Link></li><br></br>
            <li><Link to="/profile">profile</Link></li><br></br>
            <li><Link to="/Signup">signup</Link></li><br></br>
        </ul>
       
    </div>
    
  )
}

export default Nav