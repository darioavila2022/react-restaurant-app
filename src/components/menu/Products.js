import React from "react";
import './products.css'

function Products(props) {
    return(
<div className="products">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <img src={props.image} alt='products-img' className="products-img"/>  
    </div>
    );
}

export default Products;


