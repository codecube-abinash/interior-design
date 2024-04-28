import React, { useState } from 'react';
import './CitySelector.css';

const cities = [
    'Bangalore',
    'Mumbai',
    'Delhi',
    'Bhubaneswar',
    'Pune',
    'Hyderabad'
];

const CitySelector = () => {
    const [selectedCity, setSelectedCity] = useState(null);

    const handleScroll = (amount) => {
        const citySelectIconList = document.getElementById("citySelectIconList");
        citySelectIconList.scrollLeft += amount;
    };

    const handleNext = () => {
        handleScroll(50);
    };

    const handlePrev = () => {
        handleScroll(-50);
    };

    return (
        <div className="city-selector-container">
            <button className='city-selector-icon-arrow' onClick={handlePrev}>
                <i className="bi bi-chevron-left"></i>
            </button>
            <div className="city-selector-icon-list" id="citySelectIconList">
                {cities.map((city) => (
                    <div
                        key={city}
                        className={`city-selector-element ${selectedCity === city ? 'active' : ''}`}
                        onClick={() => setSelectedCity(city)}
                    >
                        <img
                            className='city-selector-icon'
                            src={require(`../../assets/icons/${city.toLocaleLowerCase()}.jpg`)}
                            alt={city}
                        />
                        <div className='city-selector-name'>{city}</div>
                    </div>
                ))}
            </div>
            <button className='city-selector-icon-arrow' onClick={handleNext}>
                <i className="bi bi-chevron-right"></i>
            </button>
        </div>
    );
};

export default CitySelector;
