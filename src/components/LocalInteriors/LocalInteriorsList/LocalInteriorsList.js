import React, { useState } from 'react';
import './LocalInteriorsList.css';
import InteriorDetailsCard from '../InteriorDetailsCard/InteriorDetailsCard';
import Filters from '../Filters/Filters';
import Slider from "../../Slider/Slider";

const LocalInteriorsList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageList, setImageList] = useState([]);

    const designers = [
        {
            "id": 1,
            "name": "Sophia Anderson",
            "rating": 4.3,
            "total_rating": 32994,
            "address": "123 Main Street, New York, USA",
            "verified": true,
            "projects_done": 85,
            "images": ["https://www.thekarighars.com/wp-content/uploads/2022/10/Slider-5-Living.jpg", "https://media.designcafe.com/wp-content/uploads/2022/07/27120857/innovative-interior-designers-in-bangalore-from-designcafe.jpg", "https://www.decorpot.com/images/project/1163271426BannerLiving.jpg"],
            "contact": [
                {
                    "type": "mobile",
                    "text": "mobile",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "email",
                    "text": "email",
                    "value": "ethan.baker@example.com"
                },
                {
                    "type": "whatsapp",
                    "texy": "whatsapp",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "telegram",
                    "text": "telegram",
                    "value": "@ethan_baker"
                }
            ],
            "customer_reviews": [
                { "name": "John Doe", "rating": 5, "comment": "Great designer, highly recommended!" },
                { "name": "Jane Smith", "rating": 4.5, "comment": "Excellent work, very professional." }
            ]
        },
        {
            "id": 2,
            "name": "Ethan Baker",
            "rating": 4.6,
            "total_rating": 231,
            "address": "456 Elm Street, Los Angeles, USA",
            "verified": true,
            "projects_done": 72,
            "images": ["https://www.thekarighars.com/wp-content/uploads/2022/10/Slider-5-Living.jpg", "https://media.designcafe.com/wp-content/uploads/2022/07/27120857/innovative-interior-designers-in-bangalore-from-designcafe.jpg", "https://www.decorpot.com/images/project/1163271426BannerLiving.jpg"],
            "contact": [
                {
                    "type": "mobile",
                    "text": "mobile",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "email",
                    "text": "email",
                    "value": "ethan.baker@example.com"
                },
                {
                    "type": "whatsapp",
                    "texy": "whatsapp",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "telegram",
                    "text": "telegram",
                    "value": "@ethan_baker"
                }
            ],
            "customer_reviews": [
                { "name": "Emily Johnson", "rating": 4.8, "comment": "Amazing designs, exceeded my expectations!" },
                { "name": "Michael Brown", "rating": 4.5, "comment": "Very creative, easy to work with." }
            ]
        },
        {
            "id": 3,
            "name": "Isabella Carter",
            "rating": "4.9",
            "total_rating": 928,
            "address": "789 Oak Avenue, Chicago, USA",
            "verified": true,
            "projects_done": 90,
            "images": ["https://www.thekarighars.com/wp-content/uploads/2022/10/Slider-5-Living.jpg", "https://media.designcafe.com/wp-content/uploads/2022/07/27120857/innovative-interior-designers-in-bangalore-from-designcafe.jpg", "https://www.decorpot.com/images/project/1163271426BannerLiving.jpg"],
            "contact": [
                {
                    "type": "mobile",
                    "text": "mobile",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "email",
                    "text": "email",
                    "value": "ethan.baker@example.com"
                },
                {
                    "type": "whatsapp",
                    "texy": "whatsapp",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "telegram",
                    "text": "telegram",
                    "value": "@ethan_baker"
                }
            ],
            "customer_reviews": [
                { "name": "David Johnson", "rating": 4.9, "comment": "Isabella has a great eye for design and attention to detail." },
                { "name": "Sarah White", "rating": 5, "comment": "Absolutely love Isabella's work, transformed my space beautifully!" }
            ]
        },
        {
            "id": 4,
            "name": "Sophia Anderson",
            "rating": 4.3,
            "total_rating": 32994,
            "address": "123 Main Street, New York, USA",
            "verified": true,
            "projects_done": 85,
            "images": ["https://www.thekarighars.com/wp-content/uploads/2022/10/Slider-5-Living.jpg", "https://media.designcafe.com/wp-content/uploads/2022/07/27120857/innovative-interior-designers-in-bangalore-from-designcafe.jpg", "https://www.decorpot.com/images/project/1163271426BannerLiving.jpg"],
            "contact": [
                {
                    "type": "mobile",
                    "text": "mobile",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "email",
                    "text": "email",
                    "value": "ethan.baker@example.com"
                },
                {
                    "type": "whatsapp",
                    "texy": "whatsapp",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "telegram",
                    "text": "telegram",
                    "value": "@ethan_baker"
                }
            ],
            "customer_reviews": [
                { "name": "John Doe", "rating": 5, "comment": "Great designer, highly recommended!" },
                { "name": "Jane Smith", "rating": 4.5, "comment": "Excellent work, very professional." }
            ]
        },
        {
            "id": 5,
            "name": "Ethan Baker",
            "rating": 4.6,
            "total_rating": 231,
            "address": "456 Elm Street, Los Angeles, USA",
            "verified": true,
            "projects_done": 72,
            "images": ["https://www.thekarighars.com/wp-content/uploads/2022/10/Slider-5-Living.jpg", "https://media.designcafe.com/wp-content/uploads/2022/07/27120857/innovative-interior-designers-in-bangalore-from-designcafe.jpg", "https://www.decorpot.com/images/project/1163271426BannerLiving.jpg"],
            "contact": [
                {
                    "type": "mobile",
                    "text": "mobile",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "email",
                    "text": "email",
                    "value": "ethan.baker@example.com"
                },
                {
                    "type": "whatsapp",
                    "texy": "whatsapp",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "telegram",
                    "text": "telegram",
                    "value": "@ethan_baker"
                }
            ],
            "customer_reviews": [
                { "name": "Emily Johnson", "rating": 4.8, "comment": "Amazing designs, exceeded my expectations!" },
                { "name": "Michael Brown", "rating": 4.5, "comment": "Very creative, easy to work with." }
            ]
        },
        {
            "id": 6,
            "name": "Isabella Carter",
            "rating": "4.9",
            "total_rating": 928,
            "address": "789 Oak Avenue, Chicago, USA",
            "verified": true,
            "projects_done": 90,
            "images": ["https://www.thekarighars.com/wp-content/uploads/2022/10/Slider-5-Living.jpg", "https://media.designcafe.com/wp-content/uploads/2022/07/27120857/innovative-interior-designers-in-bangalore-from-designcafe.jpg", "https://www.decorpot.com/images/project/1163271426BannerLiving.jpg"],
            "contact": [
                {
                    "type": "mobile",
                    "text": "mobile",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "email",
                    "text": "email",
                    "value": "ethan.baker@example.com"
                },
                {
                    "type": "whatsapp",
                    "texy": "whatsapp",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "telegram",
                    "text": "telegram",
                    "value": "@ethan_baker"
                }
            ],
            "customer_reviews": [
                { "name": "David Johnson", "rating": 4.9, "comment": "Isabella has a great eye for design and attention to detail." },
                { "name": "Sarah White", "rating": 5, "comment": "Absolutely love Isabella's work, transformed my space beautifully!" }
            ]
        },
        {
            "id": 7,
            "name": "Sophia Anderson",
            "rating": 4.3,
            "total_rating": 32994,
            "address": "123 Main Street, New York, USA",
            "verified": true,
            "projects_done": 85,
            "images": ["https://www.thekarighars.com/wp-content/uploads/2022/10/Slider-5-Living.jpg", "https://media.designcafe.com/wp-content/uploads/2022/07/27120857/innovative-interior-designers-in-bangalore-from-designcafe.jpg", "https://www.decorpot.com/images/project/1163271426BannerLiving.jpg"],
            "contact": [
                {
                    "type": "mobile",
                    "text": "mobile",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "email",
                    "text": "email",
                    "value": "ethan.baker@example.com"
                },
                {
                    "type": "whatsapp",
                    "texy": "whatsapp",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "telegram",
                    "text": "telegram",
                    "value": "@ethan_baker"
                }
            ],
            "customer_reviews": [
                { "name": "John Doe", "rating": 5, "comment": "Great designer, highly recommended!" },
                { "name": "Jane Smith", "rating": 4.5, "comment": "Excellent work, very professional." }
            ]
        },
        {
            "id": 8,
            "name": "Ethan Baker",
            "rating": 4.6,
            "total_rating": 231,
            "address": "456 Elm Street, Los Angeles, USA",
            "verified": true,
            "projects_done": 72,
            "images": ["https://www.thekarighars.com/wp-content/uploads/2022/10/Slider-5-Living.jpg", "https://media.designcafe.com/wp-content/uploads/2022/07/27120857/innovative-interior-designers-in-bangalore-from-designcafe.jpg", "https://www.decorpot.com/images/project/1163271426BannerLiving.jpg"],
            "contact": [
                {
                    "type": "mobile",
                    "text": "mobile",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "email",
                    "text": "email",
                    "value": "ethan.baker@example.com"
                },
                {
                    "type": "whatsapp",
                    "texy": "whatsapp",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "telegram",
                    "text": "telegram",
                    "value": "@ethan_baker"
                }
            ],
            "customer_reviews": [
                { "name": "Emily Johnson", "rating": 4.8, "comment": "Amazing designs, exceeded my expectations!" },
                { "name": "Michael Brown", "rating": 4.5, "comment": "Very creative, easy to work with." }
            ]
        },
        {
            "id": 9,
            "name": "Isabella Carter",
            "rating": "4.9",
            "total_rating": 928,
            "address": "789 Oak Avenue, Chicago, USA",
            "verified": true,
            "projects_done": 90,
            "images": ["https://www.thekarighars.com/wp-content/uploads/2022/10/Slider-5-Living.jpg", "https://media.designcafe.com/wp-content/uploads/2022/07/27120857/innovative-interior-designers-in-bangalore-from-designcafe.jpg", "https://www.decorpot.com/images/project/1163271426BannerLiving.jpg"],
            "contact": [
                {
                    "type": "mobile",
                    "text": "mobile",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "email",
                    "text": "email",
                    "value": "ethan.baker@example.com"
                },
                {
                    "type": "whatsapp",
                    "texy": "whatsapp",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "telegram",
                    "text": "telegram",
                    "value": "@ethan_baker"
                }
            ],
            "customer_reviews": [
                { "name": "David Johnson", "rating": 4.9, "comment": "Isabella has a great eye for design and attention to detail." },
                { "name": "Sarah White", "rating": 5, "comment": "Absolutely love Isabella's work, transformed my space beautifully!" }
            ]
        },
        {
            "id": 10,
            "name": "Sophia Anderson",
            "rating": 4.3,
            "total_rating": 32994,
            "address": "123 Main Street, New York, USA",
            "verified": true,
            "projects_done": 85,
            "images": ["https://www.thekarighars.com/wp-content/uploads/2022/10/Slider-5-Living.jpg", "https://media.designcafe.com/wp-content/uploads/2022/07/27120857/innovative-interior-designers-in-bangalore-from-designcafe.jpg", "https://www.decorpot.com/images/project/1163271426BannerLiving.jpg"],
            "contact": [
                {
                    "type": "mobile",
                    "text": "mobile",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "email",
                    "text": "email",
                    "value": "ethan.baker@example.com"
                },
                {
                    "type": "whatsapp",
                    "texy": "whatsapp",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "telegram",
                    "text": "telegram",
                    "value": "@ethan_baker"
                }
            ],
            "customer_reviews": [
                { "name": "John Doe", "rating": 5, "comment": "Great designer, highly recommended!" },
                { "name": "Jane Smith", "rating": 4.5, "comment": "Excellent work, very professional." }
            ]
        },
        {
            "id": 11,
            "name": "Ethan Baker",
            "rating": 4.6,
            "total_rating": 231,
            "address": "456 Elm Street, Los Angeles, USA",
            "verified": true,
            "projects_done": 72,
            "images": ["https://www.thekarighars.com/wp-content/uploads/2022/10/Slider-5-Living.jpg", "https://media.designcafe.com/wp-content/uploads/2022/07/27120857/innovative-interior-designers-in-bangalore-from-designcafe.jpg", "https://www.decorpot.com/images/project/1163271426BannerLiving.jpg"],
            "contact": [
                {
                    "type": "mobile",
                    "text": "mobile",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "email",
                    "text": "email",
                    "value": "ethan.baker@example.com"
                },
                {
                    "type": "whatsapp",
                    "texy": "whatsapp",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "telegram",
                    "text": "telegram",
                    "value": "@ethan_baker"
                }
            ],
            "customer_reviews": [
                { "name": "Emily Johnson", "rating": 4.8, "comment": "Amazing designs, exceeded my expectations!" },
                { "name": "Michael Brown", "rating": 4.5, "comment": "Very creative, easy to work with." }
            ]
        },
        {
            "id": 12,
            "name": "Isabella Carter",
            "rating": "4.9",
            "total_rating": 928,
            "address": "789 Oak Avenue, Chicago, USA",
            "verified": true,
            "projects_done": 90,
            "images": ["https://www.thekarighars.com/wp-content/uploads/2022/10/Slider-5-Living.jpg", "https://media.designcafe.com/wp-content/uploads/2022/07/27120857/innovative-interior-designers-in-bangalore-from-designcafe.jpg", "https://www.decorpot.com/images/project/1163271426BannerLiving.jpg"],
            "contact": [
                {
                    "type": "mobile",
                    "text": "mobile",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "email",
                    "text": "email",
                    "value": "ethan.baker@example.com"
                },
                {
                    "type": "whatsapp",
                    "texy": "whatsapp",
                    "value": "+1 (234) 567-8901"
                },
                {
                    "type": "telegram",
                    "text": "telegram",
                    "value": "@ethan_baker"
                }
            ],
            "customer_reviews": [
                { "name": "David Johnson", "rating": 4.9, "comment": "Isabella has a great eye for design and attention to detail." },
                { "name": "Sarah White", "rating": 5, "comment": "Absolutely love Isabella's work, transformed my space beautifully!" }
            ]
        }
    ]

    const filters = [
        { id: 1, name: 'Sort By', values: ['Rating', 'Popular', 'Distance'] },
        { id: 2, name: 'Profession', values: ['Designer', 'Decorator'] },
        { id: 3, name: 'Material', values: ['PVC', 'Aluminium', 'Wood'] },
        { id: 4, name: 'Property Type', values: ['Residential', 'Commercial', 'Corporate'] },
        { id: 5, name: 'Project Type', values: ['Modular Kitchen', 'Furniture', 'Ceiling', 'Wall', 'Wardrobe', 'Bathrooms'] },
        { id: 6, name: 'Ratings', values: ['Any', '3.5', '4.0', '4.5', '5.0'] }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectItem = (imageList) => {
        setImageList(imageList);
    };

    return (
        <div className='local-interiors-list-container'>
            <div className={`filter ${isOpen ? 'open' : ''}`}>
                <div className='filter-body'>
                    <Filters filters={filters} />
                </div>
            </div>
            <div className='local-interiors-list-header'>
                <div className='page-name'>Interior Designers</div>
                <i className={`bi bi-${isOpen ? 'x' : 'filter'}-circle filter-icon`} onClick={toggleMenu}></i>
            </div>
            <div className='local-interiors-list-body'>
                <div className="side-menu">
                    <InteriorDetailsCard designer={designers} selectItem={handleSelectItem} />
                </div>
                <div className='local-interiors-list-details'>
                    <Slider slides={imageList} />
                </div>
            </div>
        </div>
    );
};

export default LocalInteriorsList;
