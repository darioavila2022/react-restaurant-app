import React from "react";
import Form from "./form/Form";

import './book.css'

function Book() {
    return (
        <div>
            <h1 className='book-title'>Book a table</h1>
            <Form />
        </div>
    )
}

export default Book