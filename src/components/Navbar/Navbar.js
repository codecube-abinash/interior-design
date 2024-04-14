import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = (props) => {
    console.log('Navbar loaded')
    const { companyName } = props;

    useEffect(() => {
        const scrollFunction = () => {
            const navbar = document.getElementById("navbar");
            if (navbar) {
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    navbar.classList.add("small");
                } else {
                    navbar.classList.remove("small");
                }
            }
        };

        window.addEventListener('scroll', scrollFunction);

        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    }, []);

    return (
        <nav id="navbar">
            <div className="company-name">{companyName}</div>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/local-interiors">Local Interiors</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
                <li>
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
    companyName: PropTypes.string
};

Navbar.defaultProps = {
    companyName: "Please provide the company name here"
};

export default Navbar;
