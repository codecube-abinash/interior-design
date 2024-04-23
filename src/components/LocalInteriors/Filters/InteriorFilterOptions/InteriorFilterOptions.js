import React from 'react';
import './InteriorFilterOptions.css';

const InteriorFilterOptions = ({ options }) => {
    return (
        <div className='option-container'>
            {options.map(option => (
                <span className='option' key={option}>{option}</span>
            ))}
        </div>
    );
};

export default InteriorFilterOptions;
