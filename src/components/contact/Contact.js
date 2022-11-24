import React, { useState } from "react"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firestore";

import './contact.css'
import modalImage from '../../images/contact-modal-img.jpg'

function Contact() {

  const modal = document.querySelector(".modal-wrap")
  const close = document.querySelector(".modal-close")

  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
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
          <img src={modalImage} alt="modal-img" />
          <h3>Thank you for your comment!</h3>
          <h3>It really helps us become better.</h3>
          <button className="btn modal-close">Close</button>
        </div>
      </div>

      <div className="component-container">
        <h2>Contact us</h2>
        <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
          <h3>Name:</h3>
          <input type="text" name="name" onChange={handleChange} />
          <h3>Email:</h3>
          <input type="email" name="email" onChange={handleChange} />
          <h3>Phone Number:</h3>
          <input type="tel" name="phone" onChange={handleChange} />
          <h3>Comment:</h3>
          <textarea type="text" name="comment" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact