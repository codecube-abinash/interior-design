import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Home from './components/Home/Home';
import LocalInteriors from './components/LocalInteriors/LocalInteriors';
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

  return (
    <>
      <Navbar companyName="askbaboos" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
