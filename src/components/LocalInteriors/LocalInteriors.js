import React, { useEffect } from 'react';
import './LocalInteriors.css';

const LocalInteriors = () => {
    const state = {
        designers: [
            { id: 1, name: 'John Doe', experience: '5 years', location: 'New York', rating: 4.5 },
            { id: 2, name: 'Jane Smith', experience: '8 years', location: 'Los Angeles', rating: 4.8 },
            { id: 3, name: 'Michael Johnson', experience: '10 years', location: 'Chicago', rating: 4.7 },
        ]
    };

    return (
        <div className='local-interiors-container'>
            <h1>Interior Designers</h1>
            <ul>
                {state.designers.map(designer => (
                    <li key={designer.id}>
                        <div>Name: {designer.name}</div>
                        <div>Experience: {designer.experience}</div>
                        <div>Location: {designer.location}</div>
                        <div>Rating: {designer.rating}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocalInteriors;
