import React from 'react';
import './home.css'

function Home () {
    return (
        <div className='home-container'>
            <div>
            <h1 className='home-title'>Retro Restaurant</h1>
            <p>Where every flavor tells a story. A taste you will remember!</p>
            <button className='home-button'>Menu</button>   
            <button className='home-button'>Book</button>   
            </div>
            <img src={require('../../images/restaurant-retro.jpg')} className='home-img'></img>
            <div>

                </div>         
        </div>
    )
}

export default Home