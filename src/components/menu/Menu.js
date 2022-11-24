import React from 'react';

import Products from './Products'
import './menu.css'

function Menu() {

    return (
        <div className="menu-container">
            <h2>Our Menu</h2>
            <div className="menu-items">
                <Products
                    name="Hamburger"
                    description="#1"
                    price="$10.000"
                    image={require('../../images/hamburger-img.png')}
                />
                <Products
                    name="Hamburger"
                    description="#2"
                    price="$10.000"
                    image={require('../../images/hamburger-img.png')}
                />
                <Products
                    name="Hamburger"
                    description="#3"
                    price="$10.000"
                    image={require('../../images/hamburger-img.png')}
                />
                <Products
                    name="Iced Coffee"
                    description="#4"
                    price="$10.000"
                    image={require('../../images/icecoffee-img.png')}
                />
                <Products
                    name="Iced Coffee"
                    description="#5"
                    price="$10.000"
                    image={require('../../images/icecoffee-img.png')}
                />
                <Products
                    name="Iced Coffee"
                    description="#6"
                    price="$10.000"
                    image={require('../../images/icecoffee-img.png')}
                />
                <Products
                    name="French Fries"
                    description="#7"
                    price="$10.000"
                    image={require('../../images/fries-img.png')}
                />
                <Products
                    name="French Fries"
                    description="#8"
                    price="$10.000"
                    image={require('../../images/fries-img.png')}
                />
                <Products
                    name="French Fries"
                    description="#9"
                    price="$10.000"
                    image={require('../../images/fries-img.png')}
                />
            </div>
        </div>
    )
};

export default Menu;

