import React, { useEffect } from 'react';
import './InteriorDetailsCard.css';

const InteriorDetailsCard = (prop) => {
    return (
        <>
            <div className="card" key={prop?.designer?.id}>
                <div className="card-body" >
                    <div>Name: {prop?.designer?.name}</div>
                    <div>Experience: {prop?.designer?.experience}</div>
                    <div>Location: {prop?.designer?.location}</div>
                    <div>Rating: {prop?.designer?.rating}</div>
                </div>
            </div>
        </>
    );
};

export default InteriorDetailsCard;
