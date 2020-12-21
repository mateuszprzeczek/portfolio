import React, { useState } from 'react'

import {updateObject} from '../components/utility/utility'
import './styled.scss'
import axios from '../axios'
import Input from '../components/utility/Input/Input'

const ContactForm = (props) => {
  const [formData, setFormData] = useState({
    email: {
      elementType: "input",
      elementConfig: {
          type: "email",
          placeholder: "E-Mail",
      },
      value: "",
      validation: {
          required: true,
          isEmail: true,
      },
      valid: false,
      touched: false,
  },
  name: {
      elementType: "input",
      elementConfig: {
          type: "text",
          placeholder: "Nazwa",
      },
      value: "",
      validation: {
          required: true,
          minLength: 3,
      },
      valid: false,
      touched: false,
  },
  message: {
      elementType: "textarea",
      elementConfig: {
          type: "text",
          placeholder: "Wiadomość",
      },
      value: "",
      validation: {
          required: true,
          minLength: 6,
      },
      valid: false,
      touched: false,
  },
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitButtonVisible, setSubmitButtonVisible] = useState(false)

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(formData, {
        [controlName]: updateObject(formData[controlName], {
            value: event.target.value,
            valid: checkValidity(
                event.target.value,
                formData[controlName].validation
            ),
            touched: true,
        }),
    });
    setFormData(updatedControls);
};

  const checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
        isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
        isValid = value.length >= rules.maxLength && isValid; 
    }
    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid;
    }
     isValid ? setSubmitButtonVisible(true) : setSubmitButtonVisible(false)
    return isValid;
};

  const submitHandler = event => {
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

  const formElementsArray = [];
    for (let key in formData) {
        formElementsArray.push({
            id: key,
            config: formData[key],
        });
    }

    let form = formElementsArray.map((el) => (
      <Input
          key={el.id}
          elementType={el.config.elementType}
          elementConfig={el.config.elementConfig}
          value={el.config.value}
          invalid={!el.config.valid}
          shouldValidate={el.config.validation}
          touched={el.config.touched}
          valueType={el.id}
          changed={(event) => inputChangedHandler(event, el.id)}
      />
  ));

  let errorMessage = null;

    if (props.error) {
        errorMessage = <p>{props.error.message}</p>;
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

  let button = null;
  if(submitButtonVisible) {
    button = <button type="submit">Submit</button>
  }

  const onToggleFormHandler = () => {
    window.location.replace('https://mateuszprzeczek.github.io/portfolio/');
  }
 
  if (submitted) {
    button = null;
    form = (
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
          
        </div>
        <div className="column">
        <h1>Kontakt</h1>
    {errorMessage}
    <form onSubmit={submitHandler}>
      {form}
      {button}
    </form>
    </div>
    <div className="column2">
    </div>
    </div>
  </div>
  </div>
  )
}

export default ContactForm