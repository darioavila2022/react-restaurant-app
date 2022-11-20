import React, { useState } from "react"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firestore";

import './form.css'

const Form = () => {

  const [details, setDetails] = useState({
    name: "",
    email: "",
    address: "",
    peopleNumber: "",
    phone: "",
    reservationTime: "",
    comments: "",
  })

  async function handleSubmit( event ) {
    event.preventDefault()
    console.log( details )
    try {
      const docRef = await addDoc( collection( db, "Contact" ), details );
      console.log( "Document written with ID: ", docRef.id );
    } catch ( e ) {
      console.error( "Error in adding document ", e );
    }
  }

  function handleChange( event ) {
    const { target } = event
    const { name, value } = target
    const newValues = { ...details, [ name ]: value }
    setDetails( newValues )

  }

  return(
    <form className="contact-form" onSubmit={handleSubmit}>
      <h4>Name:</h4> <input type="text" className="name" name="name" id="name" onChange={handleChange}/>
      <h4>Email:</h4> <input type="email" className="email" name="email" id="email" onChange={handleChange}/>
      <h4>Address:</h4> <input type="text" className="address" name="address" id="address" onChange={handleChange}/>
      <h4>Number of people (between 1 and 5):</h4> <input className="peopleNumber" type="range" min="1" max="5" name="peopleNumber" id="peopleNumber" onChange={handleChange}/>
      <h4>Phone Number:</h4> <input type="tel" className="phone" name="phone" id="phone" onChange={handleChange}/>
      <h4>Time and Date of reservation:</h4> <input type="datetime-local" className="reservationTime" name="reservationTime" id="reservationTime" onChange={handleChange}/>
      <h4>Additional Comments:</h4> <textarea type="text" className="comments" name="comments" id="comments" onChange={handleChange}/>
      <button type="submit" className="submit">Submit Reservation</button>
    </form>
  )
}

// const contactForm = document.querySelector(".contact-form")
// const name = document.querySelector(".name")
// const email = document.querySelector(".email")
// const address = document.querySelector(".address")
// const peopleNumber = document.querySelector(".peopleNumber")
// const phone = document.querySelector(".phone")
// const reservationTime = document.querySelector(".reservationTime")
// const comments = document.querySelector(".comments")
// const submit = document.querySelector(".submit")

// submit.addEventListener('click', (e) => {
//     e.preventDefault()
//     db.collection('form').doc().set({
//         name: name.value,
//         email: email.value,
//         address: address.value,
//         peopleNumber: peopleNumber.value,
//         phone: phone.value,
//         reservationTime: reservationTime.value,
//         comments: comments.value,
//     }).then(() => {
//         contactForm.reset()
//     })
// })


export default Form;