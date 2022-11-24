import React, { useState } from "react"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../config/firestore";

import './form.css'
import modalImage from '../../../images/form-modal-img.jpg'

const Form = () => {
  const modal = document.querySelector(".modal-wrap")
  const close = document.querySelector(".modal-close")

  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    peopleNumber: "",
    reservationTime: "",
    comments: "",
  })

  async function handleSubmit(event) {
    event.preventDefault()
    console.log(details)
    try {
      const docRef = await addDoc(collection(db, "Booking"), details);
      console.log("Document written with ID: ", docRef.id);
      modal.classList.toggle('display-none')
      close.addEventListener("click", () => {
        modal.classList.toggle('display-none')
      })
    } catch (e) {
      console.error("Error in adding document", e)
    } finally {
      document.getElementById('book-form').reset()
    }
  }

  function handleChange(event) {
    const { target } = event
    const { name, value } = target
    const newValues = { ...details, [name]: value }
    setDetails(newValues)
  }

  return (
    <div>

      <div>
        <div className="modal-wrap display-none">
          <div className="modal">
            <img src={modalImage} alt="modal-img" />
            <h3>Thank you for your reservation!</h3>
            <h3>See you at the restaurant</h3>
            <button className="btn modal-close">Close</button>
          </div>
        </div>
      </div>

      <div className='book-form-container'>
      <h2>Book a table</h2>
        <form id="book-form" className="book-form" onSubmit={handleSubmit}>
          <h3>Name:</h3>
          <input type="text" name="name" onChange={handleChange} />
          <h3>Email:</h3>
          <input type="email" name="email" onChange={handleChange} />
          <h3>Phone Number:</h3>
          <input type="tel" name="phone" onChange={handleChange} />
          <h3>Table for:</h3>
          <select name="peopleNumber" onChange={handleChange}>
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
          </select>
          <h3>Time and Date of reservation:</h3>
          <input type="datetime-local" name="reservationTime" onChange={handleChange} />
          <h3>Additional Comments:</h3>
          <textarea type="text" name="comments" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Form;