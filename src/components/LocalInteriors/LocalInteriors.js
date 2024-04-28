import React from 'react';
import './LocalInteriors.css';
import CitySelector from '../CitySelector/CitySelector';
import PropertyType from '../PropertyType/PropertyType';
import SearchLocation from '../SearchLocation/SearchLocation';
const LocalInteriors = () => {
    return (
        <>
            <div className='local-interiors-container'>
            </div>
            <div className='local-interiors-container-cover'>
                <div className='local-interiors-container-controls'>
                    <CitySelector />
                    <PropertyType />
                    <SearchLocation />
                </div>
            </div>
        </>
    );
};

export default LocalInteriors;
