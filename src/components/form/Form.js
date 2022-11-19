import React, { useState } from "react"
import { Firestore } from "@firebase/firestore";

import './form.css'

function Form () {

const AddItem = ({ firestore }) => {
    const [name, setName] = useState('');
};

const addItem = name => {
    firestore.collection('items').add({ name });
};
const handleChange = event => {
    setName(event.target.value);
 };
const handleSubmit = event => {
    event.preventDefault();
    addItem(name);
 };

return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Add Item:
          <input value={name} type="text" id="name" onChange={handleChange} />
        </label>
        <button onClick={handleSubmit}>Add item</button>
      </form>
    </main>
);

}

export default Form;