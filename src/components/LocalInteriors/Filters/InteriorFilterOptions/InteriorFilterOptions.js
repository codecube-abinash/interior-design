import React, { useEffect } from 'react';
import './InteriorFilterOptions.css';

const InteriorFilterOptions = (prop) => {
    return (
        <div className='option-container'>
            {prop.options.map(option => (
                <span className='option' key={option}>{option}</span>
            ))}
        </div>
    );
};

export default InteriorFilterOptions;
