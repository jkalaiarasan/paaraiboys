import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className="navbar">
            <h3 className="navbar">பாறை பாய்ஸ்</h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                onClick={() => setIsMobile(false)}
                >
                <Link to="/" className="home">
                    <li>முகப்பு பக்கம்</li>
                </Link>
                <Link to="/member" className="member">
                    <li>உறுப்பினர்கள்</li>
                </Link>
                <Link to="/login" className="login">
                    <li>உள்நுழை</li>
                </Link>
                <Link to="/signup" className="signup">
                    <li>உறுப்பினராக சேர்</li>
                </Link>
                <Link to="/contact" className="contact">
                    <li>தொடர்புக்கு</li>
                </Link>
            </ul>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (
                    <i className="fas fa-times"></i>
                ) : (
                    <i className="fas fa-bars"></i>
                )}
            </button>
        </nav>
    )
}

export default Navbar;