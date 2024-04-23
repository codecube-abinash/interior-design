import React from 'react';
import './Home.css';

import Slider from '../Slider/Slider';
import Service from '../Service/Service';
import Video from '../Video/Video';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Slide1 from '../../assets/images/slide_1.png';
import Slide2 from '../../assets/images/slide_2.png';
import Slide3 from '../../assets/images/slide_3.png';

const Home = () => {
    const slides = [
        Slide1,
        Slide2,
        Slide3
    ];

    return (
        <>
            <Slider slides={slides} />
            <Service />
            <Video />
            <About />
            {/* <Footer /> */}
        </>
    );
};

export default Home;
