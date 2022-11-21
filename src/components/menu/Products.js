import React from "react";
import './menu.css'

function Products(props) {
    return(
    <div className="products">
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <img src={props.image} alt='WebPage'/>  
    </div>
    );
}

export default Products;


