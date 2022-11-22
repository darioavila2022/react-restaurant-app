import React from 'react';
import { useNavigate } from "react-router-dom";

import './home.css'

function Home() {

    let navigate = useNavigate();

    return (
        <div className='home-container'>
            <div>
                <h1 className='home-title'>Retro Restaurant</h1>
                <p>Where every flavor tells a story. A taste you will remember!</p>
                <button className='home-button' onClick={() => { navigate("/menu"); }}>Menu</button>
                <button className='home-button' onClick={() => { navigate("/book"); }}>Book</button>
            </div>
            <img src={require('../../images/restaurant-retro.jpg')} className='home-img'></img>
            <button className='phone-version-btn' onClick={() => { navigate("/menu"); }}>Menu</button>
            <button className='phone-version-btn' onClick={() => { navigate("/book"); }}>Book</button>
            <div>
            </div>
        </div>
    )
}

export default Home