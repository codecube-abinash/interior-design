import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ companyName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
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
    <nav className={`navbar navbar-expand-lg fixed-top top-0 navbar-dark ${isScrolled ? 'small' : ''}`}>
      <div className='container-fluid'>
        <a className="navbar-brand" href="#">{companyName}</a>
        <button className="navbar-toggler" type="button" onClick={toggleCollapse} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/local-interiors">Local Interiors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
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
