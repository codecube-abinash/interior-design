import React from 'react';
import './Service.css';
import design from '../../assets/images/design.jpg';
import materials from '../../assets/images/materials.jpg';
import lights from '../../assets/images/lights.jpg';
import fittings from '../../assets/images/fittings.jpg';
import curtains from '../../assets/images/curtains.jpg';

const Service = () => {
    const serviceList = [
        { name: 'Design', logo: design },
        { name: 'Materials', logo: materials },
        { name: 'Lights', logo: lights },
        { name: 'Fittings', logo: fittings },
        { name: 'Carpet & Curtains', logo: curtains }
    ];

    return (
        <div className='services'>
            <div className='service-header'>What We Offer</div>
            <div className='service-container'>
                {serviceList.map((service, index) => (
                    <div key={index} className='service-box'>
                        <div className='service-logo'>
                            <img className='logo' src={service.logo} alt={`logo ${index}`} />
                        </div>
                        <div className='service-content'>{service.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
