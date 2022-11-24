import React from 'react';
import { useState, useEffect } from 'react';

import './about.css';

function About() {

    const [infoAbout, setInfoAbout] = useState('Click the buttons to get further information')

    useEffect(() => {

        return () => {
            console.log('return from resource change')
        }
    }, [infoAbout])

    return (
        <div className='component-container'>
            <h2>About us</h2>
            <p>Serving delicious food every single day since 1990!</p>
            <div>
                <button onClick={() => setInfoAbout('retrorestaurant@email.com')}>Email</button>
                <button onClick={() => setInfoAbout('(212) 346 7885')}>Phone</button>
                <button onClick={() => setInfoAbout('80-A Tubular Boulevard, Scranton, Pennsylvania')}>Address</button>
            </div>
            <p className='infoAbout'>{infoAbout}</p>
            <img className='about-img' src={require('../../images/burgergif.gif')} alt='burger-img'></img>
        </div>
    )
};

export default About;