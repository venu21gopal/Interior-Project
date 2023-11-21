
import React,{useEffect} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
        <div className='stickynav'>
        <div className='main-container'>
            <nav>
            <div className="logo">
				<h3>N<span>ue</span>S<span>tyle</span></h3>
			</div>
                <input type="checkbox" id="click"/>
                <label for="click" className="menu-btn">
                <i className="material-symbols-outlined">menu</i>
                </label>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                 
                    <li><Link to="/Gallery">Gallery</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
       </div>
    </div>
  )
}
