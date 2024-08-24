import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';



const Navbar = ({setShowLogin}) => {
  const [menu , setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext)
  
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <Link to='/'><li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</li></Link>
            <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</li>
            <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
            <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search} alt="" srcset="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.cart} alt="" srcset="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar
