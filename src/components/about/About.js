import React from "react";
import './about.css'

function About () {
    return (
        <div className="about-container">
            <h1 className='about-title'>About us</h1>
            <p>Serving delicious food every single day since 1990!</p>
            <img src={require('../../images/retro-hamburger-image.gif')} className='about-img'></img>
        </div>
    )
}

export default About