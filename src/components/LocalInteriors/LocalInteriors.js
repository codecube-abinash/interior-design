import React, { useEffect } from 'react';
import './LocalInteriors.css';
import InteriorDetailsCard from "./InteriorDetailsCard/InteriorDetailsCard";
import Filters from "./Filters/Filters";
const LocalInteriors = () => {
    const state = {
        designers: [
            { id: 1, name: 'John Doe', experience: '5 years', location: 'New York', rating: 4.5 },
            { id: 2, name: 'Jane Smith', experience: '8 years', location: 'Los Angeles', rating: 4.8 },
            { id: 3, name: 'Michael Johnson', experience: '10 years', location: 'Chicago', rating: 4.7 },
        ],
        filters: [
            { id: 1, name: 'Sort By', values: ['Rating', 'Popular', 'Distance'] },
            { id: 2, name: 'Profession', values: ['Designer', 'Decorator'] },
            { id: 3, name: 'Material', values: ['PVC', 'Aluminium', 'Wood'] },
            { id: 4, name: 'Property Type', values: ['Residential', 'Commercial', 'Corporate'] },
            { id: 5, name: 'Project Type', values: ['Modular Kitchen', 'Furniuture', 'Ceiling', 'Wall', 'Wardrobe', 'Bathrooms',] },
            { id: 6, name: 'Ratings', values: ['Any', '3.5', '4.0', '4.5', '5.0'] }
        ]

    };

    return (
        <div className='local-interiors-container'>
            <div className="filter-container" >
                <Filters filters={state.filters} />
            </div>
            <div className='details'>
                <h1>Interior Designers</h1>
                {state.designers.map(designer => (
                    <InteriorDetailsCard designer={designer} key={designer?.id}/>
                ))}
            </div>
        </div>
    );
};

export default LocalInteriors;
