import React from "react";
import {Link} from  'react-router-dom';

function Nav() {
  return (
    <div className="nav-ul">
        <ul>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Addproduct</Link></li>
            <li><Link to="/update">Updateproduct</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/profile">profile</Link></li>
            
        </ul>
    </div>
  )
}

export default Nav