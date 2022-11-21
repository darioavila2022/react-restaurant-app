import React from "react";
import Products from './Products'
import './menu.css'

function Menu() {
    return (
        <div>
            <Products
                name="Hamburger"
                description="#1"
                price="$10.000"
                image={require('../../images/hamburger-image.png')}
            />
            <Products
                name="Hamburger"
                description="#2"
                price="$10.000"
                image={require('../../images/hamburger-image.png')}
            />
            <Products
                name="Hamburger"
                description="#3"
                price="$10.000"
                image={require('../../images/hamburger-image.png')}
            />
              <Products
                name="Hamburger"
                description="#4"
                price="$10.000"
                image={require('../../images/hamburger-image.png')}
            />
             <Products
                name="Hamburger"
                description="#5"
                price="$10.000"
                image={require('../../images/hamburger-image.png')}
            />
            <Products
                name="Hamburger"
                description="#6"
                price="$10.000"
                image={require('../../images/hamburger-image.png')}
            />
            <Products
                name="Hamburger"
                description="#7"
                price="$10.000"
                image={require('../../images/hamburger-image.png')}
            />
              <Products
                name="Hamburger"
                description="#8"
                price="$10.000"
                image={require('../../images/hamburger-image.png')}
            />     
        </div>
    )
}

export default Menu

