import React, { useState, useEffect } from 'react';
import './Home.css';

import Slider from '../Slider/Slider';
import Service from '../Service/Service';
import Video from '../Video/Video';
import About from '../About/About';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <>
            <Slider />
            <Service />
            <Video />
            <About />
            <Footer />
        </>
    );
};
export default Home;