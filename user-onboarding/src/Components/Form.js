
import React from "react"

const Form = (props) => {

  return (
    <div>
      <h1>Information Stealer</h1>
      <p className="errorMSG" id="firstNameError">{props.errors.firstName}</p>
      <p className="errorMSG" id="lastNameError">{props.errors.lastName}</p>
      <p className="errorMSG" id="emailError">{props.errors.email}</p>
      <p className="errorMSG" id="passwordError">{props.errors.password}</p>
      <p className="errorMSG" id="tosError">{props.errors.TermsOfService}</p>
      <form className="form" onSubmit={props.submit} >
        <label>First Name
          <input onChange={props.change} value={props.form.firstName} name="firstName" type="text" />
        </label>
        <label>Last Name
          <input onChange={props.change} value={props.form.lastName} name="lastName" type="text" />
        </label>
        <label>Email
          <input onChange={props.change} value={props.form.email} name="email" type="email" />
        </label>
        <label>Password
          <input onChange={props.change} value={props.form.password} name="password" type="password" />
        </label>
        <label>Terms of Service
          <input onChange={props.change} checked={props.form.TermsOfService} name="TermsOfService" type="checkbox" />
        </label>
        <label>
          <input type="submit" className="button" value="submit" name="submitButton"  />
        </label>
      </form>
    </div>
  )
}
export default Form