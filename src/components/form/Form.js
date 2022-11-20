import React, { useState } from "react"
// import { Firestore } from "@firebase/firestore";

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

  const handleChange = (e) => {
    const {name, value} = e.target
  
    setDetails((prev) => {
      return { ...prev, [name]:value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(details);
  }


  return(
    <form onSubmit={handleSubmit}>
      <h4>Name:</h4> <input type="text" name="name" id="name" onChange={handleChange}/>
      <h4>Email:</h4> <input type="email" name="email" id="email" onChange={handleChange}/>
      <h4>Address:</h4> <input type="text" name="address" id="address" onChange={handleChange}/>
      <h4>Number of people (between 1 and 5):</h4> <input type="range" min="1" max="5" name="peopleNumber" id="peopleNumber" onChange={handleChange}/>
      <h4>Phone Number:</h4> <input type="tel" name="phone" id="phone" onChange={handleChange}/>
      <h4>Time and Date of reservation:</h4> <input type="datetime-local" name="reservationTime" id="reservationTime" onChange={handleChange}/>
      <h4>Additional Comments:</h4> <textarea type="text" name="comments" id="comments" onChange={handleChange}/>
      <button type="submit">Submit Reservation</button>
    </form>
  )
}



export default Form;