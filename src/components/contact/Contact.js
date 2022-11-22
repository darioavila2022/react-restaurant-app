import React, { useState } from "react"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firestore";

import './contact.css'
import modalImage from '../../images/modalImageContact.jpg'

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
          <img src={modalImage} alt="" />
          <p>Thank you for your comment!</p>
          <p>It really helps us become better</p>
          <button className="btn modal-close">Close</button>
        </div>
      </div>

      <h1 className='contact-title'>Contact us</h1>

      <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
        <p>Do you like food? Do you like the 80s? If yes, then this restaurant is for you.</p>

        <p>Name:</p>
        <input type="text" name="name" onChange={handleChange} />
        <p>Email:</p>
        <input type="email" name="email" onChange={handleChange} />
        <p>Phone Number:</p>
        <input type="tel" name="phone" onChange={handleChange} />
        <p>Comment:</p>
        <textarea type="text" name="comment" onChange={handleChange} />

        <button type="submit" className="submit-contact">Send comment</button>
        {/* <h2>Contact Details:</h2>
                <p>80/A, Tubular Boulevard, New York, United States</p>
                <p>+600600800900</p>
                <p>retro-restaurant@mailbox.com</p> */}
      </form>
    </div>
  )
}

export default Contact