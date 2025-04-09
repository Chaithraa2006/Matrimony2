import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="nav-left">
                    <Link to="/" className="logo">
                        <img src="\images\atoz-removebg-preview.png" alt="AtoZ Matrimony" />
                    </Link>
                </div>

                <div className="nav-center">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/membership">Membership</Link></li>
                        <li><Link to="/help">Help</Link></li>
                    </ul>
                </div>

                <div className="nav-right">
                    <button onClick={() => navigate('/login')} className="login-btn">Login</button>
                    <button onClick={() => navigate('/register')} className="register-btn">Register Free</button>
                </div>
            </nav>
            
            <a 
                href="https://wa.me/+919876543210" 
                className="whatsapp-float" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src="images\whatshap.jpg" alt="WhatsApp" />
            </a>
        </>
    );
};

export default Navbar;
