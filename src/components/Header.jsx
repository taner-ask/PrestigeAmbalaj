import './Header.css';
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMobile = () => setMobileOpen(open => !open);
    const closeMobile = () => {
        setMobileOpen(false);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => setDropdownOpen(open => !open);

    useEffect(() => {
        const handleClickOutside = (e) => {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                closeMobile();
            }

            if (
                dropdownOpen &&
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setDropdownOpen(false);
            }


        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownOpen]);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">Prestige Ambalaj</Link>

            <button className="hamburger-btn" onClick={toggleMobile} aria-label="Toggle menu">
                {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                <li className="nav-item"><Link to="/" onClick={closeMobile}>Home</Link></li>

                <li className="nav-item" ref={dropdownRef}>
                    <Link
                        to="#"
                        className="category-link"
                        onClick={(e) => {
                            e.preventDefault();  // "#" linkinin sayfa kaydırmasını engelle
                            toggleDropdown();
                        }}
                    >
                        Categories ▾
                    </Link>

                    <ul className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
                        {['power', 'construction', 'spare-part', 'chemicals', 'pet-reisin'].map(cat => (
                            <li key={cat}>
                                <Link to={`/category/${cat}`} onClick={closeMobile}>
                                    {cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>

                <li className="nav-item"><Link to="/about" onClick={closeMobile}>About</Link></li>
                <li className="nav-item"><Link to="/contact" onClick={closeMobile}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
