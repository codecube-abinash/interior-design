import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">

            <ul>
                <li className='header'>Header 1</li>
                <li>
                    <a href='#'>Link1</a>
                </li>
                <li>
                    <a href='#'>Link2</a>
                </li>
                <li>
                    <a href='#'>Link3</a>
                </li>
                <li>
                    <a href='#'>Link4</a>
                </li>
            </ul>

            <ul>
                <li className='header'>Header 2</li>
                <li>
                    <a href='#'>Link1</a>
                </li>
                <li>
                    <a href='#'>Link2</a>
                </li>
                <li>
                    <a href='#'>Link3</a>
                </li>
                <li>
                    <a href='#'>Link4</a>
                </li>
            </ul>
            <ul>
                <li className='header'>Header 3</li>
                <li>
                    <a href='#'>Link1</a>
                </li>
                <li>
                    <a href='#'>Link2</a>
                </li>
                <li>
                    <a href='#'>Link3</a>
                </li>
                <li>
                    <a href='#'>Link4</a>
                </li>
            </ul>
            <ul>
                <li className='header'>Header 4</li>
                <li>
                    <a href='#'>Link1</a>
                </li>
                <li>
                    <a href='#'>Link2</a>
                </li>
                <li>
                    <a href='#'>Link3</a>
                </li>
                <li>
                    <a href='#'>Link4</a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;