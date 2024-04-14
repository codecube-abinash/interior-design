import React, { useState, useEffect } from 'react';
import './Video.css';
import video from '../../assets/videos/interior.mp4';

const Video = () => {
    const backgroundVideo = document.getElementById('background-video');

    // window.addEventListener('scroll', () => {
    //   const scrollPosition = window.scrollY;
    //   const videoHeight = backgroundVideo.offsetHeight;
    //   const windowHeight = window.innerHeight;
    //   const videoOffset = backgroundVideo.offsetTop;
    //   if (scrollPosition > videoOffset - windowHeight && scrollPosition < videoOffset + videoHeight) {
    //     backgroundVideo.play();
    //   } else {
    //     backgroundVideo.pause();
    //   }
    // });

    return (
        <>
            <video id="background-video" loop muted autoPlay>
                <source src={video} type="video/mp4" />
            </video>

            <div className="content">
                {/* <h1>Welcome to My Website</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p> */}
            </div>
        </>
    );
};
export default Video;