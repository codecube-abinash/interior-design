import React, { useState, useEffect } from 'react';
import './PropertyType.css';

const PropertyType = () => {
    const [selectedPropertyType, setSelectedPropertyType] = useState(null);

    const types = [
        'Commercial',
        'Residential',
        'Corporate'
    ];
    return (
        <div className="property-type-container mt-5">
            {types.map((type, index) => (
                <a className={`property-type ${selectedPropertyType === type ? 'active' : ''}`} href='#' key={type}
                    onClick={() => setSelectedPropertyType(type)}>{type}</a>
            ))}
        </div>
    );
};

export default PropertyType;