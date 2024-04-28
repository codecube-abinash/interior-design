import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Home from './components/Home/Home';
import LocalInteriors from './components/LocalInteriors/LocalInteriors';
import LocalInteriorsList from './components/LocalInteriors/LocalInteriorsList/LocalInteriorsList';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/local-interiors",
    element: <LocalInteriors />,
  },
  {
path: "/local-interiors-list",
    element: <LocalInteriorsList />,
  },
]);

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

  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar companyName="askbaboos" />
      <div className={`app-container ${isScrolled ? 'small' : ''}`}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
