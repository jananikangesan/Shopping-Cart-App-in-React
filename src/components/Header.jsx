import React from 'react'; 
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <div className="logo">Food Cart</div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Cart"}>View Cart</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header