import React, { useState } from "react";
import Products from './Products'
import './menu.css'

function Menu() {

    return (
        <div>
            <h1 className='menu-title'>Our Menu</h1>
            <div className="menu-container">
                <Products
                    name="Hamburger1"
                    description="#1"
                    price="$10.000"
                    image={require('../../images/hamburger-img.png')}
                />
                <Products
                    name="Hamburger2"
                    description="#2"
                    price="$10.000"
                    image={require('../../images/hamburger-img.png')}
                />
                <Products
                    name="Hamburger3"
                    description="#3"
                    price="$10.000"
                    image={require('../../images/hamburger-img.png')}
                />
                <Products
                    name="Hamburger4"
                    description="#4"
                    price="$10.000"
                    image={require('../../images/hamburger-img.png')}
                />
                <Products
                    name="Hamburger5"
                    description="#5"
                    price="$10.000"
                    image={require('../../images/hamburger-img.png')}
                />
                <Products
                    name="Hamburger6"
                    description="#6"
                    price="$10.000"
                    image={require('../../images/hamburger-img.png')}
                />
                <Products
                    name="Hamburger7"
                    description="#7"
                    price="$10.000"
                    image={require('../../images/hamburger-img.png')}
                />
                <Products
                    name="Hamburger8"
                    description="#8"
                    price="$10.000"
                    image={require('../../images/hamburger-img.png')}
                />
                <Products
                    name="Hamburger9"
                    description="#9"
                    price="$10.000"
                    image={require('../../images/hamburger-img.png')}
                />
            </div>
        </div>
    )
}

export default Menu

