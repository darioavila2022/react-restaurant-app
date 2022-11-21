import React, { useState } from "react"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firestore";

import './form.css'

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
      const docRef = await addDoc(collection(db, "Contact"), details);
      console.log("Document written with ID: ", docRef.id);
      modal.classList.toggle('display-none')
      close.addEventListener("click", () => {
      modal.classList.toggle('display-none')
      })
    } catch (e) {
      console.error("Error in adding document ", e)
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
          <img src="https://i0.wp.com/t-artmagazine.com/wp-content/uploads/2021/04/vector-creator.png?fit=800%2C534&ssl=1" alt="" />
          <p>Thank you for your reservation!</p>
          <p>See you at the restaurant</p>
          <button className="btn modal-close">Close</button>
        </div>
      </div>
      <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
        <h4>Name:</h4> <input type="text" className="name" name="name" id="name" onChange={handleChange} />
        <h4>Email:</h4> <input type="email" className="email" name="email" id="email" onChange={handleChange} />
        <h4>Address:</h4> <input type="text" className="address" name="address" id="address" onChange={handleChange} />
        <h4>Number of people (between 1 and 5):</h4> <input className="peopleNumber" type="range" min="1" max="5" name="peopleNumber" id="peopleNumber" onChange={handleChange} />
        <h4>Phone Number:</h4> <input type="tel" className="phone" name="phone" id="phone" onChange={handleChange} />
        <h4>Time and Date of reservation:</h4> <input type="datetime-local" className="reservationTime" name="reservationTime" id="reservationTime" onChange={handleChange} />
        <h4>Additional Comments:</h4> <textarea type="text" className="comments" name="comments" id="comments" onChange={handleChange} />
        <button type="submit" className="submit">Submit Reservation</button>
      </form>
    </div>
  )
}

export default Form;