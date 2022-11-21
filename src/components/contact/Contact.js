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
            <h2>Contact us:</h2>
            <h3>Do you like food? Do you like the 80s? If yes, then this restaurant is for you.</h3>
            <h3>We serve food for reasonable prices.</h3>
            <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                <h4>Name:</h4> <input type="text" name="name" onChange={handleChange} />
                <h4>Email:</h4> <input type="email" name="email" onChange={handleChange} />
                <h4>Phone Number:</h4> <input type="tel" name="phone" onChange={handleChange} />
                <h4>Comment:</h4> <textarea type="text" name="comment" onChange={handleChange} />
                <button type="submit" className="submit">Send comment</button>
                <h2>Contact Details:</h2>
                <p>80/A, Tubular Boulevard, New York, United States</p>
                <p>+600600800900</p>
                <p>retro-restaurant@mailbox.com</p>
            </form>
        </div>
    )
}

export default Contact