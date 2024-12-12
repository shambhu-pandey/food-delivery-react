import './Navbar.css';
import { assets } from '../../assets/assets';
import { useState } from 'react';

const Navbar = () => {

  const[menu , setMenu] = useState("home") ;

  return (
    <div  className="navbar">

    <img src={assets.logo} alt="" className="logo" />
   
   <ul className="navbar-menu">
    <li onClick ={() => setMenu("home")} className={menu==="home" ? "active" : " "}>home</li>
    <li onClick={() => setMenu("menu")}  className={menu==="menu" ? "active" : " "}>menu</li>
    <li onClick={() => setMenu("mobile-app")}  className={menu==="mobile-app" ? "active" : " "}>mobile-app</li>
    <li onClick={() => setMenu("contact-app")}  className={menu==="contact-app" ? "active" : " "}>contact-app</li>
   </ul>

   <div className="navbar-right">
    <img src={assets.search_icon} alt="" />

    <div className="navbar-search-icon">
      <img src={assets.basket_icon} alt="" />
      <div className='dot'></div>
    </div>

    <button className='navbar-button'>sign in</button>
   </div>
    </div>
  );
}

export default Navbar;
