import React, { useState, useEffect } from 'react';
import './Slider.css';
import Slide1 from '../../slide_1.png';
import Slide2 from '../../slide_2.png';
import Slide3 from '../../slide_3.png';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 4000);
        return () => clearInterval(interval);
    }, [currentIndex]);


    const goToPreviousSlide = () => {
        const index = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        const index = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    const slides = [
        Slide1,
        Slide2,
        Slide3
    ];

    const slideStyle = {
        transform: `translateX(-${currentIndex * 100}%)`
    };

    return (
        <div className="slider-container">
            <div className="slider" style={slideStyle}>
                {slides.map((imageUrl, index) => (
                    <div key={index} className="slide">
                        <img src={imageUrl} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <button className="prev" onClick={goToPreviousSlide}>&#10094;</button>
            <button className="next" onClick={goToNextSlide}>&#10095;</button>
        </div>
    );
};

export default Slider;
