import React, { useState } from 'react';
import './InteriorDetailsCard.css';
import Rating from './Ratings/Ratings';
import ContactMethods from './ContactMethods/ContactMethods';

const InteriorDetailsCard = ({ designer, selectItem }) => {
    const [selectedCardId, setSelectedCardId] = useState(null);

    const onCardClickHandler = (item) => {
        setSelectedCardId(item.id === selectedCardId ? null : item.id);
        selectItem(item.images);
    };

    return (
        <div className="cards">
            {designer.map((item) => (
                <div
                    key={item.id}
                    className={`card ${selectedCardId === item.id ? 'selected' : ''}`}
                    onClick={() => onCardClickHandler(item)}
                >
                    <div className="card-body">
                        <div className='company-name'>
                            <div>{item.name}</div>
                            <span className='verify-icon'>
                                {item.verified && <div> <i className="bi bi-patch-check-fill"></i></div>}
                            </span>
                        </div>
                        <Rating rating={item.rating} />  &nbsp;<span>({item.total_rating})</span>
                        <div><i className="bi bi-geo-alt"></i> {item.address}</div>
                        <ContactMethods contactMethods={item.contact} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InteriorDetailsCard;
