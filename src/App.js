import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Service from './components/Service/Service';
import About from './components/About/About';
import Video from './components/Video/Video';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState('day');

  useEffect(() => {
    const determineTheme = () => {
      const currentTime = new Date().getHours();
      return (currentTime >= 18 || currentTime < 6) ? 'dusk' : 'day';
    };

    setTheme(determineTheme());
  }, []);

  const determineTheme = () => {
    const currentTime = new Date().getHours();
    return (currentTime >= 18 || currentTime < 6) ? 'dusk' : 'day';
  };

  return (
    <>
      <Navbar companyName="askbaboos" />
      <Slider />
      <Service />
      <Video />
      <About />
      <Footer />
    </>
  );
}

export default App;
