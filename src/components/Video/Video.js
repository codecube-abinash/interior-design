import React, { useState, useEffect } from 'react';
import './Video.css';
import video from '../../assets/videos/interior.mp4';

const Video = () => {
    return (
        <>
            <video id="background-video" loop muted autoPlay>
                <source src={video} type="video/mp4" />
            </video>
            <div className="video-container"></div>
        </>
    );
};
export default Video;