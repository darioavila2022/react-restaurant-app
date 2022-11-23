import React, { useState } from "react"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../config/firestore";

import './form.css'
import modalImage from '../../../images/modalImage.jpg'

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
      <div className="modal-wrap display-none">
        <div className="modal">
          <img src={modalImage} alt="" />
          <p>Thank you for your reservation!</p>
          <p>See you at the restaurant</p>
          <button className="btn modal-close">Close</button>
        </div>
      </div>

      <form id="book-form" className="book-form" onSubmit={handleSubmit}>
        <p>Name:</p>
        <input type="text" name="name" onChange={handleChange} />
        <p>Email:</p>
        <input type="email" name="email" onChange={handleChange} />
        <p>Phone Number:</p>
        <input type="tel" name="phone" onChange={handleChange} />
        <p>Table for:</p>
        <select name="peopleNumber" onChange={handleChange}>
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4 People</option>
        </select>
        <p>Time and Date of reservation:</p>
        <input type="datetime-local" name="reservationTime" onChange={handleChange} />
        <p>Additional Comments:</p>
        <textarea type="text" name="comments" onChange={handleChange} />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  )
}

export default Form;