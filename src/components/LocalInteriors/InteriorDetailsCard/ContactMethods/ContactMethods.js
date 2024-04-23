import React from 'react';
import './ContactMethods.css';

const ContactMethods = (props) => {
    const contacts = props?.contactMethods;

    return (
        contacts.map((data, index) => {
            return (
                <span className='contact-icon' key={index}>
                    {data?.type === 'mobile' && <i className="bi bi-telephone"></i>}
                    {data?.type === 'email' && <i className="bi bi-envelope contact-icon"></i>}
                    {data?.type === 'whatsapp' && <i className="bi bi-whatsapp contact-icon"></i>}
                    {data?.type !== 'mobile' && data?.type !== 'email' && data?.type !== 'whatsapp' && <i className="bi bi-telegram contact-icon"></i>}
                </span>
            );
        })
    );
};

export default ContactMethods;
