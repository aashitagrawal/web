import { Link } from 'react-router-dom';
import React from "react";
import './Navbar.css'; // Import CSS file for styling

function Navbar() {
    return (
        <nav>
            <ul className="navbar-list">
                <li> <Link to="/home">Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/contact">Contact</Link> </li>
                <li> <Link to="/portfolio">Portfolio</Link> </li>
                <li> <Link to="/products">Products</Link> </li>
            </ul>
        </nav>
    );
}
export default Navbar;

