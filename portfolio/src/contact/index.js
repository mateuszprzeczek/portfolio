import React, { useState } from 'react'

import './styled.scss'
import axios from '../axios'

const ContactForm = (props) => {
  const [formData, setFormData] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    console.log(formData)
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
    setSubmitted(false)
  }

  const sendEmail = () => {
    axios.post(
      '/emails.json',
      formData
    ).then(res => setSubmitted(true))
      .catch(error => {
        console.log(error)
      })
  }

  const onToggleFormHandler = () => {
    setSubmitted(!submitted)
  }

  let display = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={updateInput}
        value={formData.name || ''}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={updateInput}
        value={formData.email || ''}
      />
      <textarea
        type="text"
        name="message"
        placeholder="Message"
        onChange={updateInput}
        value={formData.message || ''}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  )
  if (submitted) {
    display = (
        <>
          <h1>Wiadomość została wysłana.</h1>
          <button className='button' onClick={onToggleFormHandler}>OK</button>
        </>
    )
  }

  return (
    <div className="formContainer">
    <div className="contactForm" id={props.id}>
      <div className="row">
        <div className="column3">
          <h1>Kontakt</h1>
        </div>
        <div className="column">
    {display}
    </div>
    <div className="column2">
    </div>
    </div>
  </div>
  </div>
  )
}

export default ContactForm