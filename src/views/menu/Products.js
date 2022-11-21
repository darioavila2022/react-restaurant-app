import React from "react";
import './menu.css'

function Products(props) {
    return(
    <div className="products">
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>{props.price}</p>
    </div>
    );
}

export default Products;


