import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ companyName }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav id="navbar" className={`nav-container ${isScrolled ? 'small' : ''}`}>
            <div className="navbar-name">{companyName}</div>
            <ul className='menu-list'>
                <li className='menu-item'>
                    <a href="/">Home</a>
                </li>
                <li className='menu-item'>
                    <a href="/local-interiors">Local Interiors</a>
                </li>
                <li className='menu-item'>
                    <a href="#">About Us</a>
                </li>
                <li className='menu-item'>
                    <a href="#">Contact Us</a>
                </li>
                <li className='menu-item'>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    companyName: PropTypes.string,
};

Navbar.defaultProps = {
    companyName: "Please provide the company name here",
};

export default Navbar;
