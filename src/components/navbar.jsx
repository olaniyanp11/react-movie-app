import React from "react";
import { Link } from "react-router-dom";
import '../assets/nav.css'
function Navbar(){
    return (
        <nav className="navbar">
            <Link to="/" className="links">home</Link>
            <Link to="/about"className="links">about </Link>
            <Link to="/services"className="links">services </Link>
        </nav>
    )

}

export default Navbar