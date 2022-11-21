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
    address: "",
    peopleNumber: "",
    phone: "",
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
      document.getElementById('contactForm').reset()
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
      <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
        <h4>Name:</h4> <input type="text" name="name" onChange={handleChange} />
        <h4>Email:</h4> <input type="email" name="email" onChange={handleChange} />
        <h4>Address:</h4> <input type="text" name="address" onChange={handleChange} />
        {/* <h4>Number of people:</h4> <input  type="range" min="1" max="5" name="peopleNumber" onChange={handleChange} /> */}
        <h4>Table for:</h4>
        <select name="peopleNumber" onChange={handleChange}>
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4 People</option>
        </select>
        <h4>Phone Number:</h4> <input type="tel" name="phone" onChange={handleChange} />
        <h4>Time and Date of reservation:</h4> <input type="datetime-local" name="reservationTime" onChange={handleChange} />
        <h4>Additional Comments:</h4> <textarea type="text" name="comments" onChange={handleChange} />
        <button type="submit" className="submit">Submit Reservation</button>
      </form>
    </div>
  )
}

export default Form;