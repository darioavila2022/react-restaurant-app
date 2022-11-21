import React from "react";
import Products from './Products'
import './menu.css'

function Menu() {
    return (
        <div>
            <Products
                name="product1"
                description="description1"
                price="$10"
            />
            <Products
                name="product2"
                description="description2"
                price="$20"
            />
            <Products
                name="product3"
                description="description3"
                price="$0"
            />
            
        </div>
    )
}

export default Menu

